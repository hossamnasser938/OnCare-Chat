import {TextInput} from 'react-native';

import {IInputProps} from './input.types';

export const Input = (props: IInputProps) => {
  return <TextInput {...props} />;
};
