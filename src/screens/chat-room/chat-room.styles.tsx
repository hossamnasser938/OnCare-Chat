import {R} from '@res';
import {hp, wp} from '@utils/styles';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  padding-vertical: ${hp(3)}px;
  padding-horizontal: ${wp(5)}px;
`;

export const BackIcon = styled.Image.attrs({
  source: R.images.back,
})`
  padding: ${hp(2)}px;
`;

export const ChatRoomHeaderSectionOuter = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ChatRoomHeaderSectionInner = styled.Pressable``;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${hp(2)}px;
  justify-content: space-between;
`;

export const KeyboardAvoidingView = styled(RNKeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`;