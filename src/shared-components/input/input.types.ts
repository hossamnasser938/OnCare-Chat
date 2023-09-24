import {TextInputProps} from 'react-native';

export enum EValidityState {
  NONE,
  VALID,
  INVALID,
}

export interface IInputProps extends TextInputProps {
  validityState?: EValidityState;
}
