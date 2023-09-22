import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

export const ErrorText = styled.Text`
  color: ${R.colors.red};
  min-height: ${hp(4)}px;
`;

export const AppLoading = styled.ActivityIndicator.attrs({
  color: R.colors.appTheme.primaryText,
})``;

export const ScreenTitle = styled.Text`
  text-align: center;
  color: ${R.colors.appTheme.primary};
  font-weight: 500;
  font-size: ${hp(5)}px;
  padding: ${hp(2)}px;
`;
