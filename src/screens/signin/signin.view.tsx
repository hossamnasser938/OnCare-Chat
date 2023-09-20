import {Button, Input} from '@shared-components';
import React, {useState} from 'react';

import {Container} from './signin.styles';
import {ISigninViewProps} from './signin.types';

export const SigninView = (props: ISigninViewProps) => {
  const {onSubmit} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const prepareAndSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <Container>
      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Password" onChangeText={setPassword} />
      <Button title="Signin" onPress={prepareAndSubmit} />
    </Container>
  );
};
