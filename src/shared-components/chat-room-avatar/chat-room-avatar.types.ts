import {EAvatarSize} from '@shared-components/characters-avatar';
import {IChatRoom} from '@state';

export interface IUserAvatar {
  chatRoom: IChatRoom;
  size: EAvatarSize;
}
