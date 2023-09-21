import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${R.colors.appTheme.primary};
  border-radius: 20px;
  border-width: 1px;
  border-color: ${R.colors.appTheme.primary};
  padding-vertical: ${hp(1.3)}px;
`;

export const ButtonText = styled.Text`
  color: ${R.colors.appTheme.primaryText};
  font-size: ${hp(3)}px;
`;
