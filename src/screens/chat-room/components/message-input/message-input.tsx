import {R} from '@res';
import {Input} from '@shared-components';
import {useMSTStore} from '@state';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

import {Container, InputWrapper, SendIcon} from './message-input.styles';
import {IMessageInputProps} from './message-input.types';

export const MessageInput = (props: IMessageInputProps) => {
  const {onSubmit} = props;
  const {chatRoomsStore} = useMSTStore();

  const [input, setInput] = useState('');

  const submitHandler = () => {
    if (input !== '') {
      onSubmit(input);
      setInput('');
    }
  };

  const onInputFocus = () => {
    chatRoomsStore.openedChatRoom?.authParticipant?.startTyping();
  };

  const onInputBlur = () => {
    chatRoomsStore.openedChatRoom?.authParticipant?.stopTyping();
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
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
      </InputWrapper>
      <Pressable onPress={submitHandler}>
        <SendIcon />
      </Pressable>
    </Container>
  );
};
