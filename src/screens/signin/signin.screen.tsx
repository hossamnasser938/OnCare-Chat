import {translateErrorCode} from '@data-layer';
import {AppRoutes} from '@navigation';
import {useMSTStore} from '@state';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import {ISigninScreenProps, SigninFormData} from './signin.types';
import {SigninView} from './signin.view';

export const SigninScreen = (props: ISigninScreenProps) => {
  const {navigation} = props;
  const {authStore} = useMSTStore();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({email, password}: SigninFormData) => {
    setIsLoading(true);
    try {
      await authStore.signin(email, password);
    } catch (err: any) {
      Alert.alert(translateErrorCode(err?.code));
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignup = () => {
    navigation.navigate(AppRoutes.SignupScreen);
  };

  return (
    <SigninView
      onSubmit={onSubmit}
      signupHandler={navigateToSignup}
      isLoading={isLoading}
    />
  );
};
