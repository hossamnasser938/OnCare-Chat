import {AppRoutes} from '@navigation';
import React from 'react';

import {ISignupScreenProps, SignupFormData} from './signup.types';
import {SignupView} from './signup.view';

export const SignupScreen = (props: ISignupScreenProps) => {
  const {navigation} = props;

  const onSubmit = ({
    email,
    password,
    firstName,
    lastName,
  }: SignupFormData) => {};

  const navigateToSignuin = () => {
    navigation.navigate(AppRoutes.SigninScreen);
  };

  return <SignupView signinHandler={navigateToSignuin} onSubmit={onSubmit} />;
};
