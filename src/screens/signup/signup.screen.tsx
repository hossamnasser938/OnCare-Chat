import {translateErrorCode} from '@data-layer';
import {AppRoutes} from '@navigation';
import {useMSTStore} from '@state';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import {ISignupScreenProps, SignupFormData} from './signup.types';
import {SignupView} from './signup.view';

export const SignupScreen = (props: ISignupScreenProps) => {
  const {navigation} = props;
  const {authStore} = useMSTStore();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignupFormData) => {
    setIsLoading(true);
    try {
      await authStore.signup(email, password, firstName, lastName);
    } catch (err: any) {
      Alert.alert(translateErrorCode(err?.code));
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignuin = () => {
    navigation.navigate(AppRoutes.SigninScreen);
  };

  return (
    <SignupView
      signinHandler={navigateToSignuin}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};
