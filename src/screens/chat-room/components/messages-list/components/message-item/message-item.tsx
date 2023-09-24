import {ParticipantAvatar} from '@shared-components';
import {useMSTStore} from '@state';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';

import {
  Column,
  Container,
  MessageOwnerParticipantAvatarWrapper,
  MessageText,
  MessageTimeText,
  MessageWrapper,
} from './message-item.styles';
import {IMessageProps} from './message-item.types';

export const MessageItem = observer((props: IMessageProps) => {
  const {message} = props;
  const {chatRoomsStore} = useMSTStore();
  const messageOwnerParticipant =
    chatRoomsStore.openedChatRoom?.participantsMap.get(message.owner);

  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const formattedTime = new Date(message.createdAt).toLocaleTimeString();

  return (
    <Container
      isAuthUserMessage={message.isAuthUserMessage}
      onPress={toggleShowDetails}>
      {!message.isAuthUserMessage && messageOwnerParticipant && (
        <MessageOwnerParticipantAvatarWrapper>
          <ParticipantAvatar participant={messageOwnerParticipant} />
        </MessageOwnerParticipantAvatarWrapper>
      )}
      <Column isAuthUserMessage={message.isAuthUserMessage}>
        {showDetails && <MessageTimeText>{formattedTime}</MessageTimeText>}
        <MessageWrapper isAuthUserMessage={message.isAuthUserMessage}>
          <MessageText isAuthUserMessage={message.isAuthUserMessage}>
            {message.text}
          </MessageText>
        </MessageWrapper>
      </Column>
    </Container>
  );
});
