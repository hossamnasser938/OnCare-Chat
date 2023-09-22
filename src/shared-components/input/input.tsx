import React, {forwardRef, Ref} from 'react';
import {TextInput} from 'react-native';

import {InputWrapper} from './input.styles';
import {IInputProps} from './input.types';

const _Input = (props: IInputProps, ref: Ref<TextInput>) => {
  const {validityState, ...textInputProprs} = props;

  return (
    <InputWrapper validityState={validityState}>
      <TextInput {...textInputProprs} ref={ref} />
    </InputWrapper>
  );
};

export const Input = forwardRef(_Input);
