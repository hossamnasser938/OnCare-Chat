import {R} from '@res';
import {CharactersAvatar} from '@shared-components/characters-avatar';
import React from 'react';

import {IUserAvatar} from './chat-room-avatar.types';

export const ChatRoomAvatar = (props: IUserAvatar) => {
  const {size, chatRoom} = props;

  return (
    <CharactersAvatar
      size={size}
      characters={chatRoom.chatRoomNameShortCut}
      backgroundColor={R.colors.black}
      fontColor={R.colors.white}
    />
  );
};
