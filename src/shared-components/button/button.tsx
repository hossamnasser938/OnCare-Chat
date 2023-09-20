import React from 'react';
import {Pressable, Text} from 'react-native';

import {IButtonProps} from './button.types';

export const Button = (props: IButtonProps) => {
  const {title, ...rest} = props;

  return (
    <Pressable {...rest}>
      <Text>{title}</Text>
    </Pressable>
  );
};
