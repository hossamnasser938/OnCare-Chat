import React from 'react';

import {AvatarWrapper, NameShortcutText} from './characters-avatar.styles';
import {IAvatarProps} from './characters-avatar.types';

export const CharactersAvatar = (props: IAvatarProps) => {
  const {characters, size, backgroundColor, borderColor, fontColor} = props;

  return (
    <AvatarWrapper
      size={size}
      backgroundColor={backgroundColor}
      borderColor={borderColor}>
      <NameShortcutText size={size} fontColor={fontColor}>
        {characters}
      </NameShortcutText>
    </AvatarWrapper>
  );
};
