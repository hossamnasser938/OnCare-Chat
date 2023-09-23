import {IChatRoom} from '@state';
import {AppError} from '@utils/errors';

import {DB} from './db';

export const ChatRooms = {
  async createChatRoom(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      throw new AppError('db/existing-chat-room');
    }
    await ref.set({name, owner: userId, createdAt: Date.now()});
  },

  listenOnCreatedChatRooms(cb: (chatRoom: IChatRoom) => void) {
    DB.CHAT_ROOMS_REF.on('child_added', snapshot => {
      const chatRoom: IChatRoom = snapshot.val();
      cb(chatRoom);
    });

    return () => DB.CHAT_ROOMS_REF.off();
  },
};
