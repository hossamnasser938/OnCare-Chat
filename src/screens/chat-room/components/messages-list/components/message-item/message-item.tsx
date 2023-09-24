import {ParticipantAvatar, Participants} from '@shared-components';
import {useMSTStore} from '@state';
import {IParticipant} from '@state/models/participant.mstmodel';
import {observer} from 'mobx-react-lite';
import React, {useMemo, useState} from 'react';

import {
  Column,
  Container,
  MessageOwnerParticipantAvatarWrapper,
  MessageText,
  MessageTimeText,
  MessageWrapper,
  OuterContainer,
  ParticipantsWrapper,
} from './message-item.styles';
import {IMessageProps} from './message-item.types';

export const MessageItem = observer((props: IMessageProps) => {
  const {message} = props;
  const {chatRoomsStore} = useMSTStore();
  const messageOwnerParticipant = message.messageOwnerAsParticipant;

  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const formattedTime = new Date(message.createdAt).toLocaleTimeString();

  const messageReadersAsParticipants = useMemo(() => {
    return message.readers.map<IParticipant>(
      reader => reader.readerAsParticipant,
    );
  }, [message.readers]);

  return (
    <OuterContainer>
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

      {showDetails && (
        <ParticipantsWrapper>
          <Participants
            participants={messageReadersAsParticipants}
            isAuthUserMessage={message.isAuthUserMessage}
          />
        </ParticipantsWrapper>
      )}
    </OuterContainer>
  );
});
