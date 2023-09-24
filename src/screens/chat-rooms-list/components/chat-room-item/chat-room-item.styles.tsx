import {R} from '@res';
import {hp, wp} from '@utils/styles';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: ${R.colors.lightGrey};
  border-radius: 20px;
  border-width: 1px;
  border-color: ${R.colors.lightGrey};
  padding: ${hp(1)}px;
  margin-horizontal: ${wp(2)}px;
  margin-vertical: ${hp(1)}px;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  margin-start: ${wp(3)}px;
`;

export const ChatRoomName = styled.Text`
  font-size: ${hp(3)}px;
`;

export const ParticipantsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
