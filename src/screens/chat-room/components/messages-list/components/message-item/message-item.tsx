import React from 'react';

import {Container, MessageText, MessageWrapper} from './message-item.styles';
import {IMessageProps} from './message-item.types';

export const MessageItem = (props: IMessageProps) => {
  const {message} = props;

  return (
    <Container isAuthUserMessage={message.isAuthUserMessage}>
      <MessageWrapper isAuthUserMessage={message.isAuthUserMessage}>
        <MessageText isAuthUserMessage={message.isAuthUserMessage}>
          {message.text}
        </MessageText>
      </MessageWrapper>
    </Container>
  );
};
