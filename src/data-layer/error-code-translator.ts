import {R} from '@res';

const ErrorCodeTranslator: Record<string, string> = {
  'auth/email-already-in-use': R.strings.errors.emailAlreadyInUser,
  'auth/invalid-email': R.strings.errors.invalidEmail,
  'db/existing-chat-room': R.strings.errors.existingChatRoom,
};

export const translateErrorCode = (errorCode: string) => {
  const translation = ErrorCodeTranslator[errorCode];

  return translation || R.strings.errors.unexpected;
};
