import {AppRoutes} from '@navigation';
import {useMSTStore} from '@state';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {IChatRoomsScreenProps} from './chat-rooms-list.types';
import {ChatRoomsListView} from './chat-rooms-list.view';
import {useChatRoomsListSubscribe} from './chat-rooms-list-use-subscribe.hook';

export const ChatRoomsListScreen = observer((props: IChatRoomsScreenProps) => {
  const {navigation} = props;
  const {chatRoomsStore} = useMSTStore();
  const {chatRooms} = chatRoomsStore;
  console.log('chatRooms', chatRooms);

  useChatRoomsListSubscribe();

  const navigateToCreateChatRoomScreen = () => {
    navigation.navigate(AppRoutes.CreateChatRoomScreen);
  };

  return (
    <ChatRoomsListView
      createChatHandler={navigateToCreateChatRoomScreen}
      chatRooms={chatRooms}
    />
  );
});
