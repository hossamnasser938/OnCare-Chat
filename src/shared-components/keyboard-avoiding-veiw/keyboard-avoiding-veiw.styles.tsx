import {TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView as RNKeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const KeyboardAwareScrollViewWrapper = styled(
  RNKeyboardAwareScrollView,
).attrs({
  contentContainerStyle: {minHeight: '100%'},
})`
  flex: 1;
`;

export const KeyboardDismisser = styled(TouchableWithoutFeedback)`
  flex: 1;
  background-color: red;
`;
