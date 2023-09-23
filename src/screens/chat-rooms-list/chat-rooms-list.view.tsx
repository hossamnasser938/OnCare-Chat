import {R} from '@res';
import {ButtonText, ScreenContainer} from '@shared-components';
import React from 'react';
import {Text, View} from 'react-native';

import {
  CreateChatRoomBtn,
  CreateChatRoomBtnWrapper,
  NewChatIcon,
} from './chat-rooms-list.styles';
import {IChatRoomsViewProps} from './chat-rooms-list.types';

export const ChatRoomsListView = (props: IChatRoomsViewProps) => {
  const {createChatHandler, chatRooms} = props;

  return (
    <ScreenContainer>
      <View>
        {chatRooms.map(chatRoom => (
          <Text>{chatRoom.name}</Text>
        ))}
      </View>
      <CreateChatRoomBtnWrapper>
        <CreateChatRoomBtn onPress={createChatHandler}>
          <NewChatIcon />
          <ButtonText>{R.strings.newChat}</ButtonText>
        </CreateChatRoomBtn>
      </CreateChatRoomBtnWrapper>
    </ScreenContainer>
  );
};
