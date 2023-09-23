import {R} from '@res';
import {ButtonText, ScreenContainer} from '@shared-components';
import {IChatRoom} from '@state';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import {
  CreateChatRoomBtn,
  CreateChatRoomBtnWrapper,
  NewChatIcon,
} from './chat-rooms-list.styles';
import {IChatRoomsViewProps} from './chat-rooms-list.types';
import {ChatRoomItem} from './components';

export const ChatRoomsListView = (props: IChatRoomsViewProps) => {
  const {createChatHandler, chatRooms} = props;

  const renderChatRoom = useCallback(({item}: {item: IChatRoom}) => {
    return <ChatRoomItem chatRoom={item} />;
  }, []);

  const keyExtractor = useCallback((item: IChatRoom) => {
    return item.name;
  }, []);

  return (
    <ScreenContainer>
      <FlatList
        data={chatRooms}
        keyExtractor={keyExtractor}
        renderItem={renderChatRoom}
      />
      <CreateChatRoomBtnWrapper>
        <CreateChatRoomBtn onPress={createChatHandler}>
          <NewChatIcon />
          <ButtonText>{R.strings.newChat}</ButtonText>
        </CreateChatRoomBtn>
      </CreateChatRoomBtnWrapper>
    </ScreenContainer>
  );
};
