import {CharactersAvatar} from '@shared-components/characters-avatar';
import React from 'react';

import {IUserAvatar} from './user-avatar.types';

export const UserAvatar = (props: IUserAvatar) => {
  const {size, user} = props;

  return <CharactersAvatar size={size} characters={user.userNameShortCut} />;
};
