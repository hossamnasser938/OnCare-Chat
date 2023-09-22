import {EValidityState} from './input.types';

export const getValidityState = (submitted: boolean, error: any) => {
  return !submitted
    ? EValidityState.NONE
    : error
    ? EValidityState.INVALID
    : EValidityState.VALID;
};
