import {R} from '@res';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {TypingInidcatorText} from './typing-inidicator.styles';
import {ITypingIndicatorProps} from './typing-inidicator.types';

const MAX_RENDERED_PARTICIPANTS_COUNT = 2;

export const TypingIndicators = observer((props: ITypingIndicatorProps) => {
  const {typingParticipants} = props;

  const typingParticipantsNames = typingParticipants
    .slice(0, MAX_RENDERED_PARTICIPANTS_COUNT)
    .map(participant => participant.user.firstName)
    .join(', ');

  const typingText = `${typingParticipantsNames} ${
    typingParticipants.length > MAX_RENDERED_PARTICIPANTS_COUNT
      ? R.strings.andMore
      : ''
  } ${
    typingParticipants.length === 1 ? R.strings.isTyping : R.strings.areTyping
  } `;

  return typingParticipants.length ? (
    <TypingInidcatorText>{typingText}</TypingInidcatorText>
  ) : null;
});
