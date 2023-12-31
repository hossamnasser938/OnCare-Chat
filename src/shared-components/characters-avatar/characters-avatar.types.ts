export enum EAvatarSize {
  LARGE,
  MEDIUM,
  SMALL,
  TINY,
}

export interface IAvatarProps {
  characters: string;
  size: EAvatarSize;
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
}
