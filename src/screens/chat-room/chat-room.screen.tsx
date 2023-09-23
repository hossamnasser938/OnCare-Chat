import React from 'react';

import {IChatRoomScreenProps} from './chat-room.types';
import {ChatRoomView} from './chat-room.view';

export const ChatRoomScreen = (props: IChatRoomScreenProps) => {
  console.log('props.route.params.chatRoom', props.route.params.chatRoom);

  return <ChatRoomView />;
};
