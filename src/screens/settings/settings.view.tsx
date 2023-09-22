import {R} from '@res';
import {HorizontalLine, ScreenContainer, ScreenTitle} from '@shared-components';
import {UserAvatar} from '@shared-components/user-avatar/user-avatar';
import {EUserAvatarSize} from '@shared-components/user-avatar/user-avatar.types';
import {useMSTStore} from '@state';
import React from 'react';

import {
  ActionsWrapper,
  ActionWrapper,
  LogoutActionText,
  ProfileWrapper,
  UserNameText,
} from './settings.styles';
import {ISettingsViewProps} from './settings.types';

export const SettingsView = (props: ISettingsViewProps) => {
  const {
    authStore: {user},
  } = useMSTStore();

  return (
    <ScreenContainer>
      <ScreenTitle>{R.strings.settings}</ScreenTitle>
      {user && (
        <ProfileWrapper>
          <UserAvatar user={user} size={EUserAvatarSize.MEDIUM} />
          <UserNameText>{user.fullName}</UserNameText>
        </ProfileWrapper>
      )}
      <ActionsWrapper>
        <HorizontalLine />
        <ActionWrapper onPress={props.logoutHandler}>
          <LogoutActionText>{R.strings.logout}</LogoutActionText>
        </ActionWrapper>
        <HorizontalLine />
      </ActionsWrapper>
    </ScreenContainer>
  );
};
