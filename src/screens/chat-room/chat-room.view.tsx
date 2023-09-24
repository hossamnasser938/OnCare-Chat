import {
  HorizontalLine,
  Participants,
  ScreenContainer,
} from '@shared-components';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Pressable} from 'react-native';

import {
  BackIcon,
  ChatRoomHeaderSectionInner,
  ChatRoomHeaderSectionOuter,
  ChatRoomScreenTitle,
  ContentContainer,
  Header,
  KeyboardAvoidingView,
} from './chat-room.styles';
import {IChatRoomViewProps} from './chat-room.types';
import {MessageInput, MessagesList, TypingIndicators} from './components';

export const ChatRoomView = observer((props: IChatRoomViewProps) => {
  const {chatRoom, goBack, sendMessageHandler} = props;

  return (
    <ScreenContainer>
      <KeyboardAvoidingView>
        <Header>
          <ChatRoomHeaderSectionOuter>
            <ChatRoomHeaderSectionInner>
              <ChatRoomScreenTitle>{chatRoom.name}</ChatRoomScreenTitle>
              <Participants participants={chatRoom.participants} />
            </ChatRoomHeaderSectionInner>
          </ChatRoomHeaderSectionOuter>
          <Pressable onPress={goBack}>
            <BackIcon />
          </Pressable>
        </Header>
        <HorizontalLine />

        <ContentContainer>
          <MessagesList messages={chatRoom.messages} />
          <TypingIndicators typingParticipants={chatRoom.typingParticipants} />
          <MessageInput onSubmit={sendMessageHandler} />
        </ContentContainer>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
});
