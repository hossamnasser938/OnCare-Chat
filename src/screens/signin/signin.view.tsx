import {useValidationRules} from '@hooks';
import {R} from '@res';
import {
  Button,
  ErrorText,
  Input,
  KeyboardAvoidingView,
  ScreenContainer,
  VerticalSpace,
} from '@shared-components';
import {getValidityState} from '@shared-components/input/input.utils';
import React, {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Image, Pressable, TextInput} from 'react-native';

import {
  BrandImageWrapper,
  FormWrapper,
  SignupHintText,
  SignupText,
} from './signin.styles';
import {ISigninViewProps, SigninFormData} from './signin.types';

export const SigninView = (props: ISigninViewProps) => {
  const {onSubmit, signupHandler, isLoading} = props;

  const passwordRef = useRef<TextInput>() as React.MutableRefObject<TextInput>;
  const focusPassword = () => {
    passwordRef.current.focus();
  };

  const {emailValidationRules, passwordValidationRules} = useValidationRules();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm<SigninFormData>({
    reValidateMode: 'onSubmit',
  });

  const emailValidityState = getValidityState(isSubmitted, errors.email);
  const passwordValidityState = getValidityState(isSubmitted, errors.password);

  const submitHandler = handleSubmit(onSubmit);

  return (
    <ScreenContainer>
      <KeyboardAvoidingView>
        <BrandImageWrapper>
          <Image source={R.images.logo} />
        </BrandImageWrapper>
        <FormWrapper>
          <Controller
            control={control}
            rules={emailValidationRules}
            name="email"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={R.strings.email}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="next"
                onSubmitEditing={focusPassword}
                validityState={emailValidityState}
                autoCapitalize="none"
              />
            )}
          />
          <ErrorText>{errors.email ? errors.email.message : ''}</ErrorText>

          <Controller
            control={control}
            rules={passwordValidationRules}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                ref={passwordRef}
                placeholder={R.strings.password}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="done"
                onSubmitEditing={submitHandler}
                validityState={passwordValidityState}
                secureTextEntry
              />
            )}
          />
          <ErrorText>
            {errors.password ? errors.password.message : ''}
          </ErrorText>

          <Button
            title={R.strings.login}
            onPress={submitHandler}
            isLoading={isLoading}
          />
          <VerticalSpace />
          <Pressable onPress={signupHandler}>
            <SignupHintText>
              {R.strings.donotHaveAccount}{' '}
              <SignupText>{R.strings.signup}</SignupText>
            </SignupHintText>
          </Pressable>
        </FormWrapper>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};
