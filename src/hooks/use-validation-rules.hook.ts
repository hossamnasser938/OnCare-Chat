import {R} from '@res';

const EMAIL_REG =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_PASSWORD = 8;
const MIN_USER_NAME = 1;
const MAX_USER_NAME = 20;
const MIN_CHAT_ROOM_NAME = 2;
const MAX_CHAT_ROOM_NAME = 100;

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

  const userNameValidationRules = {
    ...requiredValidationRules,
    minLength: {
      message: R.strings.minName,
      value: MIN_USER_NAME,
    },
    maxLength: {
      message: R.strings.maxName,
      value: MAX_USER_NAME,
    },
  };

  const chatRoomNameValidationRules = {
    ...requiredValidationRules,
    minLength: {
      message: R.strings.minName,
      value: MIN_CHAT_ROOM_NAME,
    },
    maxLength: {
      message: R.strings.maxName,
      value: MAX_CHAT_ROOM_NAME,
    },
  };

  return {
    emailValidationRules,
    passwordValidationRules,
    userNameValidationRules,
    chatRoomNameValidationRules,
  };
};
