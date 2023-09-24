import {DataLayer} from '@data-layer';
import {IChatRoom} from '@state';
import {useEffect} from 'react';

export const useChatRoomSubscribe = (chatRoom: IChatRoom) => {
  useEffect(() => {
    const unsubscribe = DataLayer.Messages.listenOnCreatedMessages(
      chatRoom.name,
      message => {
        chatRoom.messageAdded(message);
      },
    );

    return unsubscribe;
  }, [chatRoom]);
};
