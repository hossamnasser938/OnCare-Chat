import {ParticipantAvatar} from '@shared-components';
import {useMSTStore} from '@state';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {
  Container,
  MessageOwnerParticipantAvatarWrapper,
  MessageText,
  MessageWrapper,
} from './message-item.styles';
import {IMessageProps} from './message-item.types';

export const MessageItem = observer((props: IMessageProps) => {
  const {message} = props;
  const {chatRoomsStore} = useMSTStore();
  const messageOwnerParticipant =
    chatRoomsStore.openedChatRoom?.participantsMap.get(message.owner);

  return (
    <Container isAuthUserMessage={message.isAuthUserMessage}>
      {!message.isAuthUserMessage && messageOwnerParticipant && (
        <MessageOwnerParticipantAvatarWrapper>
          <ParticipantAvatar participant={messageOwnerParticipant} />
        </MessageOwnerParticipantAvatarWrapper>
      )}
      <MessageWrapper isAuthUserMessage={message.isAuthUserMessage}>
        <MessageText isAuthUserMessage={message.isAuthUserMessage}>
          {message.text}
        </MessageText>
      </MessageWrapper>
    </Container>
  );
});
