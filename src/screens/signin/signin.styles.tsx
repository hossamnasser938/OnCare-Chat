import {R} from '@res';
import {VerticalSpace} from '@shared-components';
import {hp, wp} from '@utils/styles';
import React from 'react';
import {styled} from 'styled-components/native';

export const FormWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${wp(10)}px;
`;

export const BrandImageWrapper = styled.View`
  flex: 1;
  margin-top: ${hp(10)}px;
  align-items: center;
`;

export const SignupHintText = styled.Text`
  color: ${R.colors.grey};
`;

export const SignupText = styled.Text`
  color: ${R.colors.appTheme.primary};
`;

export const SigninVerticalSpace = () => <VerticalSpace />;
