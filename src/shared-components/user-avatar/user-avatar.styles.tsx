import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

import {EUserAvatarSize} from './user-avatar.types';

const UserAvatarSizeToWrapperDimMapper: Record<EUserAvatarSize, number> = {
  [EUserAvatarSize.LARGE]: 14,
  [EUserAvatarSize.MEDIUM]: 10,
  [EUserAvatarSize.SMALL]: 7,
  [EUserAvatarSize.TINY]: 4,
};

const UserAvatarSizeToFontSizeMapper: Record<EUserAvatarSize, number> = {
  [EUserAvatarSize.LARGE]: 8,
  [EUserAvatarSize.MEDIUM]: 6,
  [EUserAvatarSize.SMALL]: 4,
  [EUserAvatarSize.TINY]: 2,
};

const UserAvatarSizeToBorderWidthMapper: Record<EUserAvatarSize, number> = {
  [EUserAvatarSize.LARGE]: 4,
  [EUserAvatarSize.MEDIUM]: 3,
  [EUserAvatarSize.SMALL]: 2,
  [EUserAvatarSize.TINY]: 1,
};

export const UserAvatarWrapper = styled.View<{size: EUserAvatarSize}>`
  width: ${props => hp(UserAvatarSizeToWrapperDimMapper[props.size])}px;
  height: ${props => hp(UserAvatarSizeToWrapperDimMapper[props.size])}px;
  border-radius: ${props =>
    hp(0.5 * hp(UserAvatarSizeToWrapperDimMapper[props.size]))}px;
  border-width: ${props => UserAvatarSizeToBorderWidthMapper[props.size]}px;
  border-color: ${R.colors.appTheme.primary};
  background-color: ${R.colors.appTheme.primary};
  justify-content: center;
  align-items: center;
`;

export const UserNameShortcutText = styled.Text<{size: EUserAvatarSize}>`
  font-size: ${props => hp(UserAvatarSizeToFontSizeMapper[props.size])};
  color: ${R.colors.appTheme.primaryText};
`;
