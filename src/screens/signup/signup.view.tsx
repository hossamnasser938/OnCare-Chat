import {useValidationRules} from '@hooks/use-validation-rules.hook';
import {R} from '@res';
import {
  Button,
  Input,
  KeyboardAvoidingView,
  ScreenContainer,
  VerticalSpace,
} from '@shared-components';
import {ErrorText} from '@shared-components/atoms/atoms';
import {getValidityState} from '@shared-components/input/input.utils';
import React, {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Image, Pressable, TextInput} from 'react-native';

import {
  BrandImageWrapper,
  FormWrapper,
  SigninHintText,
  SigninText,
} from './signup.styles';
import {ISignupViewProps, SignupFormData} from './signup.types';

export const SignupView = (props: ISignupViewProps) => {
  const {onSubmit, signinHandler} = props;

  const passwordRef = useRef<TextInput>() as React.MutableRefObject<TextInput>;
  const firstNameRef = useRef<TextInput>() as React.MutableRefObject<TextInput>;
  const lastNameRef = useRef<TextInput>() as React.MutableRefObject<TextInput>;

  const focusPassword = () => {
    passwordRef.current.focus();
  };

  const focusFirstName = () => {
    firstNameRef.current.focus();
  };

  const focusLastName = () => {
    lastNameRef.current.focus();
  };

  const {emailValidationRules, passwordValidationRules, nameValidationRules} =
    useValidationRules();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm<SignupFormData>({
    reValidateMode: 'onSubmit',
  });

  const emailValidityState = getValidityState(isSubmitted, errors.email);
  const passwordValidityState = getValidityState(isSubmitted, errors.password);
  const firstNameValidityState = getValidityState(
    isSubmitted,
    errors.firstName,
  );
  const lastNameValidityState = getValidityState(isSubmitted, errors.lastName);

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
                returnKeyType="next"
                onSubmitEditing={focusFirstName}
                validityState={passwordValidityState}
                secureTextEntry
              />
            )}
          />
          <ErrorText>
            {errors.password ? errors.password.message : ''}
          </ErrorText>

          <Controller
            control={control}
            rules={nameValidationRules}
            name="firstName"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                ref={firstNameRef}
                placeholder={R.strings.firstName}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="next"
                onSubmitEditing={focusLastName}
                validityState={firstNameValidityState}
              />
            )}
          />
          <ErrorText>
            {errors.firstName ? errors.firstName.message : ''}
          </ErrorText>

          <Controller
            control={control}
            rules={nameValidationRules}
            name="lastName"
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                ref={lastNameRef}
                placeholder={R.strings.lastName}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                returnKeyType="done"
                onSubmitEditing={submitHandler}
                validityState={lastNameValidityState}
              />
            )}
          />
          <ErrorText>
            {errors.lastName ? errors.lastName.message : ''}
          </ErrorText>

          <Button title={R.strings.signup} onPress={submitHandler} />
          <VerticalSpace />
          <Pressable onPress={signinHandler}>
            <SigninHintText>
              {R.strings.alreadyHaveAccount}{' '}
              <SigninText>{R.strings.login}</SigninText>
            </SigninHintText>
          </Pressable>
        </FormWrapper>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};
