import React from 'react';

import {UserAvatarWrapper, UserNameShortcutText} from './user-avatar.styles';
import {IUserAvatarProps} from './user-avatar.types';

export const UserAvatar = (props: IUserAvatarProps) => {
  const {user, size} = props;

  return (
    <UserAvatarWrapper size={size}>
      <UserNameShortcutText size={size}>
        {user.userNameShortCut}
      </UserNameShortcutText>
    </UserAvatarWrapper>
  );
};
