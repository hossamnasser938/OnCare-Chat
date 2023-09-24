import {IMessage} from '@state/models/message.mstmodel';

import {DB} from './db';

export const Messages = {
  async createMessage(chatRoomName: string, text: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName).child('messages').push();
    await ref.set({id: ref.key, text, owner: userId, createdAt: Date.now()});
  },

  listenOnCreatedMessages(
    chatRoomName: string,
    cb: (message: IMessage) => void,
  ) {
    DB.CHAT_ROOMS_REF.child(chatRoomName)
      .child('messages')
      .on('child_added', snapshot => {
        const message: IMessage = snapshot.val();
        cb(message);
      });

    return () => DB.CHAT_ROOMS_REF.off();
  },
};
