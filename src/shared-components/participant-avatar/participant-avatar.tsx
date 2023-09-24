import {R} from '@res';
import {
  CharactersAvatar,
  EAvatarSize,
} from '@shared-components/characters-avatar';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {IParticipantAvatar} from './participant-avatar.types';

export const ParticipantAvatar = observer((props: IParticipantAvatar) => {
  const {size = EAvatarSize.TINY, participant} = props;

  return (
    <CharactersAvatar
      size={size}
      characters={participant.user.userNameShortCut}
      backgroundColor={
        participant.inChat ? R.colors.appTheme.primary : R.colors.appTheme.tint
      }
      borderColor={
        participant.inChat ? R.colors.appTheme.primary : R.colors.grey
      }
    />
  );
});
