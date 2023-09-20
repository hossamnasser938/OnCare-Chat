import React from 'react';

import {SigninView} from './signin.view';

export const SigninScreen = () => {
  const onSubmit = (email: string, password: string) => {};

  return <SigninView onSubmit={onSubmit} />;
};
