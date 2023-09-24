import {DB} from './db';
import {IDBMessage} from './types';

export const Messages = {
  async createMessage(chatRoomName: string, text: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName).child('messages').push();
    const dbMessage: IDBMessage = {
      id: ref.key!!,
      text,
      owner: userId,
      createdAt: Date.now(),
    };
    await ref.set(dbMessage);
  },

  listenOnCreatedMessages(
    chatRoomName: string,
    cb: (message: IDBMessage) => void,
  ) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName).child('messages');

    ref.on('child_added', snapshot => {
      const message: IDBMessage = snapshot.val();
      cb(message);
    });

    return () => ref.off();
  },
};
