import {AppRoutes, IChatRoomsNavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {ChatRoomAvatar, EAvatarSize} from '@shared-components';
import {useMSTStore} from '@state';
import React from 'react';

import {ChatRoomName, Column, Container} from './chat-room-item.styles';
import {IChatRoomItemProps} from './chat-room-item.types';

export const ChatRoomItem = (props: IChatRoomItemProps) => {
  const {chatRoom} = props;

  const navigation =
    useNavigation<IChatRoomsNavigationProp<AppRoutes.ChatRoomsListScreen>>();

  const {chatRoomsStore} = useMSTStore();

  const navigateToChatRoomScreen = () => {
    chatRoomsStore.joinChatRoom(chatRoom);
    navigation.navigate(AppRoutes.ChatRoomScreen);
  };

  return (
    <Container onPress={navigateToChatRoomScreen}>
      <ChatRoomAvatar size={EAvatarSize.SMALL} chatRoom={chatRoom} />
      <Column>
        <ChatRoomName>{chatRoom.name}</ChatRoomName>
      </Column>
    </Container>
  );
};
