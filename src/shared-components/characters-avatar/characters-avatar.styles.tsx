import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

import {EAvatarSize} from './characters-avatar.types';

const AvatarSizeToWrapperDimMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 14,
  [EAvatarSize.MEDIUM]: 10,
  [EAvatarSize.SMALL]: 7,
  [EAvatarSize.TINY]: 4,
};

const AvatarSizeToFontSizeMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 8,
  [EAvatarSize.MEDIUM]: 6,
  [EAvatarSize.SMALL]: 4,
  [EAvatarSize.TINY]: 2,
};

const AvatarSizeToBorderWidthMapper: Record<EAvatarSize, number> = {
  [EAvatarSize.LARGE]: 4,
  [EAvatarSize.MEDIUM]: 3,
  [EAvatarSize.SMALL]: 2,
  [EAvatarSize.TINY]: 1,
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
