import {R} from '@res';
import {Input} from '@shared-components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

import {Container, InputWrapper, SendIcon} from './message-input.styles';
import {IMessageInputProps} from './message-input.types';

export const MessageInput = (props: IMessageInputProps) => {
  const {onSubmit} = props;
  const [input, setInput] = useState('');

  const submitHandler = () => {
    if (input !== '') {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder={R.strings.typeMessage}
          value={input}
          onChangeText={setInput}
          returnKeyType="done"
          onSubmitEditing={submitHandler}
        />
      </InputWrapper>
      <Pressable onPress={submitHandler}>
        <SendIcon />
      </Pressable>
    </Container>
  );
};
