import {AppError} from '@utils/errors';

import {DB} from './db';
import {IDBChatRoom} from './types';

export const ChatRooms = {
  async createChatRoom(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      throw new AppError('db/existing-chat-room');
    }
    const dbChatRoom: IDBChatRoom = {
      name,
      owner: userId,
      createdAt: Date.now(),
    };
    await ref.set(dbChatRoom);
  },

  listenOnCreatedChatRooms(cb: (chatRoom: IDBChatRoom) => void) {
    DB.CHAT_ROOMS_REF.on('child_added', snapshot => {
      const chatRoom: IDBChatRoom = snapshot.val();
      cb(chatRoom);
    });

    return () => DB.CHAT_ROOMS_REF.off();
  },
};
