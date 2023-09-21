import React from 'react';

import {ButtonText, ButtonWrapper} from './button.styles';
import {IButtonProps} from './button.types';

export const Button = (props: IButtonProps) => {
  const {title, ...rest} = props;

  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};
