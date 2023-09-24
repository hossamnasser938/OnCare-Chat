import {DataLayer} from '@data-layer';
import {IDBParticipant} from '@data-layer/types';
import {IChatRoom, useMSTStore} from '@state';
import {useCallback, useEffect} from 'react';

export const useChatRoomSubscribe = (chatRoom: IChatRoom) => {
  const {usersStore} = useMSTStore();

  const onParticipantChanged = useCallback(
    async (participant: IDBParticipant) => {
      await usersStore.fetchUser(participant.user);
      chatRoom.participantChanged(participant);
    },
    [chatRoom, usersStore],
  );

  useEffect(() => {
    const unsubscribeParticipants = DataLayer.Participants.listenOnParticipants(
      chatRoom.name,
      onParticipantChanged,
      onParticipantChanged,
    );

    const unsubscribeMessagesCreated =
      DataLayer.Messages.listenOnCreatedMessages(chatRoom.name, message => {
        chatRoom.messageAdded(message);
      });

    return () => {
      unsubscribeParticipants();
      unsubscribeMessagesCreated();
    };
  }, [chatRoom, onParticipantChanged]);
};
