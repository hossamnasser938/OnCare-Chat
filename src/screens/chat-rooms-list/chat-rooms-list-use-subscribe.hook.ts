import {DataLayer} from '@data-layer';
import {useMSTStore} from '@state';
import {useEffect} from 'react';

export const useChatRoomsListSubscribe = () => {
  const {chatRoomsStore} = useMSTStore();

  useEffect(() => {
    const unsubscribe = DataLayer.ChatRooms.listenOnCreatedChatRooms(
      chatRoom => {
        console.log('chatroom', chatRoom);
        chatRoomsStore.chatRoomAdded(chatRoom);
      },
    );

    return unsubscribe;
  }, [chatRoomsStore]);
};
