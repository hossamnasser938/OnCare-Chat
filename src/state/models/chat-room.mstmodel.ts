import {DataLayer} from '@data-layer';
import {flow, Instance, types} from 'mobx-state-tree';

import {authStore} from './auth.mstmodel';
import {IMessage, Message} from './message.mstmodel';

export const ChatRoom = types
  .model('ChatRoom', {
    name: types.identifier,
    owner: types.string,
    createdAt: types.number,
    messagesMap: types.map(Message),
  })
  .actions(self => {
    const createMessage = flow(function* (text: string) {
      const userId = authStore.user?.id;
      yield DataLayer.Messages.createMessage(self.name, text, userId!!);
    });

    function messageAdded(message: IMessage) {
      self.messagesMap.set(message.id, message);
    }

    return {createMessage, messageAdded};
  })
  .views(self => ({
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
  }));

export interface IChatRoom extends Instance<typeof ChatRoom> {}
