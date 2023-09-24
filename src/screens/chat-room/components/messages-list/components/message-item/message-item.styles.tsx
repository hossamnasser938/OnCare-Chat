import {R} from '@res';
import {hp, wp} from '@utils/styles';
import styled from 'styled-components/native';

export const OuterContainer = styled.View`
  margin-vertical: ${hp(1)}px;
`;

export const Container = styled.Pressable<{isAuthUserMessage: boolean}>`
  flex-direction: row;
  justify-content: ${props =>
    props.isAuthUserMessage ? 'flex-end' : 'flex-start'};
  align-items: flex-end;
  margin-bottom: ${hp(1)}px;
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

export const MessageOwnerParticipantAvatarWrapper = styled.View`
  margin-end: ${wp(1)}px;
`;

export const MessageTimeText = styled.Text`
  color: ${R.colors.grey};
  font-size: ${hp(2)}px;
`;

export const Column = styled.View<{isAuthUserMessage: boolean}>`
  align-items: ${props =>
    props.isAuthUserMessage ? 'flex-end' : 'flex-start'};
`;

export const ParticipantsWrapper = styled.View<{isAuthUserMessage: boolean}>`
  align-items: ${props =>
    props.isAuthUserMessage ? 'flex-start' : 'flex-end'};
`;
