import {DataLayer} from '@data-layer';
import {IDBMessage, IDBParticipant} from '@data-layer/types';
import {flow, Instance, types} from 'mobx-state-tree';

import {authStore} from './auth.mstmodel';
import {Message} from './message.mstmodel';
import {Participant} from './participant.mstmodel';
import {User} from './user.mstmodel';

export const ChatRoom = types
  .model('ChatRoom', {
    name: types.identifier,
    owner: types.reference(User),
    createdAt: types.number,
    messagesMap: types.map(Message),
    participantsMap: types.map(Participant),
  })
  .actions(self => {
    const createMessage = flow(function* (text: string) {
      const userId = authStore.user?.id;
      yield DataLayer.Messages.createMessage(self.name, text, userId!!);
    });

    function messageAdded(dbMessage: IDBMessage) {
      self.messagesMap.set(dbMessage.id, dbMessage);
    }

    function participantChanged(dbParticipant: IDBParticipant) {
      self.participantsMap.set(dbParticipant.user, dbParticipant);
    }

    return {createMessage, messageAdded, participantChanged};
  })
  .views(self => ({
    get authParticipant() {
      const userId = authStore.user?.id;
      return self.participantsMap.get(userId!!);
    },
    get chatRoomNameShortCut() {
      return self.name
        .split(' ')
        .map(word => word[0])
        .filter((_, index) => index === 0 || index === 1)
        .join('');
    },
    get messages() {
      return Array.from(self.messagesMap.values());
    },
    get participants() {
      const userId = authStore.user?.id;
      return Array.from(self.participantsMap.values())
        .filter(participant => participant.user.id !== userId)
        .sort((item, nextItem) => {
          if (item.inChat && nextItem.inChat) {
            return 0;
          }
          if (item.inChat && !nextItem.inChat) {
            return -1;
          } else {
            return 1;
          }
        });
    },
    get typingParticipants() {
      return this.participants.filter(participant => participant.isTyping);
    },
  }));

export interface IChatRoom extends Instance<typeof ChatRoom> {}
