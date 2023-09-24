import {R} from '@res';
import {
  CharactersAvatar,
  EAvatarSize,
} from '@shared-components/characters-avatar';
import {ParticipantAvatar} from '@shared-components/participant-avatar';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {Container} from './chat-room-participants.styles';
import {IChatRoomParticipantsProps} from './chat-room-participants.types';

const MAX_RENDERED_PARTICIPANTS_COUNT = 3;

export const ChatRoomParticipants = observer(
  (props: IChatRoomParticipantsProps) => {
    const {
      chatRoom: {participants},
    } = props;
    const maxCountParticipants = participants.slice(
      0,
      MAX_RENDERED_PARTICIPANTS_COUNT,
    );

    return (
      <Container>
        {maxCountParticipants.map(participant => (
          <ParticipantAvatar
            key={participant.user.id}
            participant={participant}
          />
        ))}
        {participants.length > MAX_RENDERED_PARTICIPANTS_COUNT && (
          <CharactersAvatar
            characters={'+'}
            size={EAvatarSize.TINY}
            backgroundColor={R.colors.grey}
            borderColor={R.colors.grey}
          />
        )}
      </Container>
    );
  },
);
