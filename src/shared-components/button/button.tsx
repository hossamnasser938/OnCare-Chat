import {AppLoading} from '@shared-components';
import React from 'react';

import {ButtonText, ButtonWrapper} from './button.styles';
import {IButtonProps} from './button.types';

export const Button = (props: IButtonProps) => {
  const {title, isLoading, disabled, ...rest} = props;

  return (
    <ButtonWrapper {...rest} disabled={disabled || isLoading}>
      {isLoading ? <AppLoading /> : <ButtonText>{title}</ButtonText>}
    </ButtonWrapper>
  );
};
