import {DB} from './db';
import {IDBReader} from './types';

export const Readers = {
  readMessage(chatRoomName: string, messageId: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName)
      .child('messages')
      .child(messageId)
      .child('readers')
      .child(userId);

    const dbReader: IDBReader = {user: userId, readAt: Date.now()};
    ref.set(dbReader);
  },
};
