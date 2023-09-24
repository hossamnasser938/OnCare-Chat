import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

import {EAvatarSize} from './characters-avatar.types';

const AvatarSizeToWrapperDimMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 13,
  [EAvatarSize.MEDIUM]: 9,
  [EAvatarSize.SMALL]: 6,
  [EAvatarSize.TINY]: 3,
};

const AvatarSizeToFontSizeMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 7,
  [EAvatarSize.MEDIUM]: 5,
  [EAvatarSize.SMALL]: 3,
  [EAvatarSize.TINY]: 1.5,
};

const AvatarSizeToBorderWidthMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 3,
  [EAvatarSize.MEDIUM]: 2,
  [EAvatarSize.SMALL]: 1,
  [EAvatarSize.TINY]: 0.5,
};

export const AvatarWrapper = styled.View<{
  size: EAvatarSize;
  backgroundColor?: string;
}>`
  width: ${props => hp(AvatarSizeToWrapperDimMapper[props.size])}px;
  height: ${props => hp(AvatarSizeToWrapperDimMapper[props.size])}px;
  border-radius: ${props =>
    hp(0.5 * hp(AvatarSizeToWrapperDimMapper[props.size]))}px;
  border-width: ${props => AvatarSizeToBorderWidthMapper[props.size]}px;
  border-color: ${props => props.backgroundColor || R.colors.appTheme.primary};
  background-color: ${props =>
    props.backgroundColor || R.colors.appTheme.primary};
  justify-content: center;
  align-items: center;
`;

export const NameShortcutText = styled.Text<{
  size: EAvatarSize;
  fontColor?: string;
}>`
  font-size: ${props => hp(AvatarSizeToFontSizeMapper[props.size])}px;
  color: ${props => props.fontColor || R.colors.appTheme.primaryText};
`;
