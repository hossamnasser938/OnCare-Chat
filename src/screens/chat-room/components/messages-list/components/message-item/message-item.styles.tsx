import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

export const Container = styled.View<{isAuthUserMessage: boolean}>`
  margin-vertical: ${hp(1)}px;
  flex-direction: row;
  justify-content: ${props =>
    props.isAuthUserMessage ? 'flex-end' : 'flex-start'};
`;

export const MessageWrapper = styled.View<{isAuthUserMessage: boolean}>`
  background-color: ${props =>
    props.isAuthUserMessage ? R.colors.appTheme.primary : R.colors.lightGrey};
  padding: ${hp(2)}px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props =>
    props.isAuthUserMessage ? R.colors.appTheme.primary : R.colors.lightGrey};
`;

export const MessageText = styled.Text<{isAuthUserMessage: boolean}>`
  font-size: ${hp(2)}px;
  color: ${props =>
    props.isAuthUserMessage ? R.colors.white : R.colors.black};
`;
