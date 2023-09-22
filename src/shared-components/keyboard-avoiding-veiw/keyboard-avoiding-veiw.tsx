import {FlexView} from '@shared-components/layout-components';
import React, {PropsWithChildren} from 'react';
import {Keyboard} from 'react-native';

import {
  KeyboardAwareScrollViewWrapper,
  KeyboardDismisser,
} from './keyboard-avoiding-veiw.styles';

export const KeyboardAvoidingView = (props: PropsWithChildren) => {
  return (
    <KeyboardAwareScrollViewWrapper>
      <KeyboardDismisser onPress={Keyboard.dismiss}>
        <FlexView>{props.children}</FlexView>
      </KeyboardDismisser>
    </KeyboardAwareScrollViewWrapper>
  );
};
