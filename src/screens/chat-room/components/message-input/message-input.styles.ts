import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.View`
  flex: 1;
`;

export const SendIcon = styled.Image.attrs({
  source: R.images.paperPlane,
  tintColor: R.colors.appTheme.primary,
})`
  margin-start: ${hp(2)}px;
`;
