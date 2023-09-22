import {R} from '@res';

const EMAIL_REG =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_PASSWORD = 8;
const MIN_NAME = 1;
const MAX_NAME = 20;

export const useValidationRules = () => {
  const requiredValidationRules = {
    required: R.strings.inputRequired,
  };

  const emailValidationRules = {
    ...requiredValidationRules,
    pattern: {
      message: R.strings.invalidEmail,
      value: EMAIL_REG,
    },
  };

  const passwordValidationRules = {
    ...requiredValidationRules,
    minLength: {
      message: R.strings.minPassword,
      value: MIN_PASSWORD,
    },
  };

  const nameValidationRules = {
    ...requiredValidationRules,
    minLength: {
      message: R.strings.minName,
      value: MIN_NAME,
    },
    maxLength: {
      message: R.strings.maxName,
      value: MAX_NAME,
    },
  };

  return {emailValidationRules, passwordValidationRules, nameValidationRules};
};
