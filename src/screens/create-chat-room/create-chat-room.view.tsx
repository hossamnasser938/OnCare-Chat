import {useValidationRules} from '@hooks/use-validation-rules.hook';
import {R} from '@res';
import {
  Button,
  ErrorText,
  Input,
  KeyboardAvoidingView,
  ScreenContainer,
  ScreenTitle,
} from '@shared-components';
import {getValidityState} from '@shared-components/input/input.utils';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';

import {FormWrapper} from './create-chat-room.styles';
import {
  CreateChatRoomFormData,
  ICreateChatRoomViewProps,
} from './create-chat-room.types';

export const CreateChatRoomView = (props: ICreateChatRoomViewProps) => {
  const {onSubmit, isLoading} = props;

  const {chatRoomNameValidationRules} = useValidationRules();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm<CreateChatRoomFormData>({
    reValidateMode: 'onSubmit',
  });

  const nameValidityState = getValidityState(isSubmitted, errors.name);

  const submitHandler = handleSubmit(onSubmit);

  return (
    <ScreenContainer>
      <KeyboardAvoidingView>
        <ScreenTitle>{R.strings.createNewChat}</ScreenTitle>
        <FormWrapper>
          <Controller
            control={control}
            rules={chatRoomNameValidationRules}
            name="name"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={R.strings.chatRoomName}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="done"
                onSubmitEditing={submitHandler}
                validityState={nameValidityState}
              />
            )}
          />
          <ErrorText>{errors.name ? errors.name.message : ''}</ErrorText>

          <Button
            title={R.strings.create}
            onPress={submitHandler}
            isLoading={isLoading}
          />
        </FormWrapper>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};
