import {AppRoutes} from '@navigation';
import React from 'react';

import {ILandingScreenProps} from './landing.types';
import {LandingView} from './landing.view';

export const LandingScreen = (props: ILandingScreenProps) => {
  const {navigation} = props;

  const navigateToLogin = () => {
    navigation.navigate(AppRoutes.SigninScreen);
  };

  const navigateToSignup = () => {
    navigation.navigate(AppRoutes.SignupScreen);
  };

  return (
    <LandingView
      loginHandler={navigateToLogin}
      signupHandler={navigateToSignup}
    />
  );
};
