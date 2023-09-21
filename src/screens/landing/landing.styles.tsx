import {R} from '@res';
import {hp, wp} from '@utils/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BrandWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonsWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${hp(10)}px;
  margin-horizontal: ${wp(5)}px;
`;

export const BrandText = styled.Text`
  color: ${R.colors.appTheme.primary};
  font-size: ${hp(4)}px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: ${hp(3)}px;
`;
