import {R} from '@res';
import {Button, ScreenContainer} from '@shared-components';
import React from 'react';
import {Image} from 'react-native';

import {
  BrandText,
  BrandWrapper,
  ButtonsWrapper,
  ButtonWrapper,
  Container,
} from './landing.styles';
import {ILandingViewProps} from './landing.types';

export const LandingView = (props: ILandingViewProps) => {
  const {loginHandler, signupHandler} = props;

  return (
    <ScreenContainer>
      <Container>
        <BrandWrapper>
          <Image source={R.images.logo} />
          <BrandText>
            {R.strings.welcomeTo} {R.strings.brandName}
          </BrandText>
        </BrandWrapper>

        <ButtonsWrapper>
          <ButtonWrapper>
            <Button title={R.strings.login} onPress={loginHandler} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title={R.strings.signup} onPress={signupHandler} />
          </ButtonWrapper>
        </ButtonsWrapper>
      </Container>
    </ScreenContainer>
  );
};
