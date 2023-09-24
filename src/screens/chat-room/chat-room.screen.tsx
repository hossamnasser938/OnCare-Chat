import {useBackSubscription} from '@hooks';
import {useMSTStore} from '@state';
import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';

import {IChatRoomScreenProps} from './chat-room.types';
import {ChatRoomView} from './chat-room.view';
import {useChatRoomSubscribe} from './chat-room-use-subscribe.hook';

export const ChatRoomScreen = observer((props: IChatRoomScreenProps) => {
  const {navigation} = props;
  const {chatRoomsStore} = useMSTStore();
  const {openedChatRoom} = chatRoomsStore;

  const sendMessageHandler = (text: string) => {
    openedChatRoom!!.createMessage(text);
  };

  const onLeaveChatRoom = useCallback(() => {
    chatRoomsStore.leaveChatRoom();
  }, [chatRoomsStore]);

  useBackSubscription(onLeaveChatRoom);

  useChatRoomSubscribe(openedChatRoom!!);

  return (
    <ChatRoomView
      chatRoom={openedChatRoom!!}
      goBack={navigation.goBack}
      sendMessageHandler={sendMessageHandler}
    />
  );
});
