import {EAvatarSize} from '@shared-components/characters-avatar';
import {IUser} from '@state';

export interface IUserAvatar {
  user: IUser;
  size: EAvatarSize;
}
