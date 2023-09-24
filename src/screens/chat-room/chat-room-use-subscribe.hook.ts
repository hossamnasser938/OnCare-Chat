import {DataLayer} from '@data-layer';
import {IDBMessage, IDBParticipant} from '@data-layer/types';
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

  const onMessageChanged = useCallback(
    async (dbMessage: IDBMessage) => {
      await usersStore.fetchUser(dbMessage.owner);
      const message = await chatRoom.messageChanged(dbMessage);
      message.readMessage();
    },
    [chatRoom, usersStore],
  );

  useEffect(() => {
    const unsubscribeParticipants = DataLayer.Participants.listenOnParticipants(
      chatRoom.name,
      onParticipantChanged,
      onParticipantChanged,
    );

    const unsubscribeMessagesCreated = DataLayer.Messages.listenOnMessages(
      chatRoom.name,
      onMessageChanged,
      onMessageChanged,
    );

    return () => {
      unsubscribeParticipants();
      unsubscribeMessagesCreated();
    };
  }, [chatRoom, onParticipantChanged, onMessageChanged]);
};
