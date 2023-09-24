import {AppError} from '@utils/errors';

import {DB} from './db';
import {IDBParticipant} from './types';

export const Participants = {
  async joinChatRoom(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name)
      .child('participants')
      .child(userId);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      const participant: IDBParticipant = snapshot.val();
      participant.inChat = true;
      ref.set(participant);
    } else {
      const participant: IDBParticipant = {user: userId, inChat: true};
      ref.set(participant);
    }
  },

  async leaveChatRoom(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name)
      .child('participants')
      .child(userId);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      const participant: IDBParticipant = snapshot.val();
      participant.inChat = false;
      participant.isTyping = false;
      ref.set(participant);
    } else {
      throw new AppError(
        'db/missing-participant',
        'Attempting to leave a participant that does not exist',
      );
    }
  },

  async startTyping(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name)
      .child('participants')
      .child(userId);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      const participant: IDBParticipant = snapshot.val();
      participant.isTyping = true;
      ref.set(participant);
    } else {
      throw new AppError(
        'db/missing-participant',
        'Attempting to start typing a participant that does not exist',
      );
    }
  },

  async stopTyping(name: string, userId: string) {
    const ref = DB.CHAT_ROOMS_REF.child(name)
      .child('participants')
      .child(userId);
    const snapshot = await ref.once('value');
    if (snapshot.exists()) {
      const participant: IDBParticipant = snapshot.val();
      participant.isTyping = false;
      ref.set(participant);
    } else {
      throw new AppError(
        'db/missing-participant',
        'Attempting to stop typing a participant that does not exist',
      );
    }
  },

  listenOnParticipants(
    chatRoomName: string,
    onParticipantAdded: (participant: IDBParticipant) => void,
    onParticipantChanged: (participant: IDBParticipant) => void,
  ) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName).child('participants');

    ref.on('child_added', snapshot => {
      const participant: IDBParticipant = snapshot.val();
      onParticipantAdded(participant);
    });

    ref.on('child_changed', snapshot => {
      const participant: IDBParticipant = snapshot.val();
      onParticipantChanged(participant);
    });

    return () => ref.off();
  },

  listenOnUpdatedParticipants(
    chatRoomName: string,
    cb: (participant: IDBParticipant) => void,
  ) {
    const ref = DB.CHAT_ROOMS_REF.child(chatRoomName).child('participants');

    ref.on('child_changed', snapshot => {
      const participant: IDBParticipant = snapshot.val();
      cb(participant);
    });

    return () => ref.off();
  },
};
