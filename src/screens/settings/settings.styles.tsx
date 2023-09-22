import {R} from '@res';
import {hp, wp} from '@utils/styles';
import styled from 'styled-components/native';

export const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${wp(2)}px;
  background-color: ${R.colors.lightGrey};
`;

export const UserNameText = styled.Text`
  font-size: ${hp(4)}px;
  color: ${R.colors.appTheme.primary};
  margin-start: ${wp(4)}px;
`;

export const ActionsWrapper = styled.View`
  margin-top: ${hp(4)}px;
`;

export const ActionWrapper = styled.Pressable`
  padding-horizontal: ${wp(2)}px;
  padding-vertical: ${hp(1)}px;
`;

export const ActionText = styled.Text`
  font-size: ${hp(3)}px;
`;

export const LogoutActionText = styled(ActionText)`
  color: ${R.colors.red};
`;
