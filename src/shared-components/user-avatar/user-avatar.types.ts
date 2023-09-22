import {IUser} from '@state';

export enum EUserAvatarSize {
  LARGE,
  MEDIUM,
  SMALL,
  TINY,
}

export interface IUserAvatarProps {
  user: IUser;
  size: EUserAvatarSize;
}
