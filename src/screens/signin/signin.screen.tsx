import {AppRoutes} from '@navigation';
import React from 'react';

import {ISigninScreenProps, SigninFormData} from './signin.types';
import {SigninView} from './signin.view';

export const SigninScreen = (props: ISigninScreenProps) => {
  const {navigation} = props;

  const onSubmit = ({email, password}: SigninFormData) => {};

  const navigateToSignup = () => {
    navigation.navigate(AppRoutes.SignupScreen);
  };

  return <SigninView onSubmit={onSubmit} signupHandler={navigateToSignup} />;
};
