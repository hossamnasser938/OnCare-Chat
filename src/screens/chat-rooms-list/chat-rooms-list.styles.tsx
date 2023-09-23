import {R} from '@res';
import {ButtonWrapper} from '@shared-components';
import {hp, wp} from '@utils/styles';
import styled from 'styled-components/native';

export const CreateChatRoomBtnWrapper = styled.View`
  position: absolute;
  bottom: 0;
  end: 0;
  padding: ${hp(3)}px;
`;

export const CreateChatRoomBtn = styled(ButtonWrapper)`
  align-items: center;
  padding: ${hp(4)}px;
  border-radius: ${hp(10)}px;
`;

export const NewChatIcon = styled.Image.attrs({
  source: R.images.filledChat,
})`
  margin-end: ${wp(3)}px;
  tint-color: ${R.colors.appTheme.primaryText};
`;
