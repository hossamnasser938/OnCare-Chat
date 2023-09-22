import {R} from '@res';
import {hp, wp} from '@utils/styles';
import {styled} from 'styled-components/native';

export const FormWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${wp(10)}px;
`;

export const BrandImageWrapper = styled.View`
  margin-top: ${hp(10)}px;
  align-items: center;
`;

export const SigninHintText = styled.Text`
  color: ${R.colors.grey};
`;

export const SigninText = styled.Text`
  color: ${R.colors.appTheme.primary};
`;
