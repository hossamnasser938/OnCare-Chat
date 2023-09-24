import {DataLayer} from '@data-layer';
import {Instance, types} from 'mobx-state-tree';

import {authStore} from './auth.mstmodel';
import {chatRoomsStore} from './chat-rooms.mstmodel';
import {IParticipant} from './participant.mstmodel';
import {Reader} from './reader.mstmodel';
import {User} from './user.mstmodel';

export const Message = types
  .model('Message', {
    id: types.identifier,
    text: types.string,
    owner: types.reference(User),
    createdAt: types.number,
    readersMap: types.map(Reader),
  })
  .actions(self => {
    function readMessage() {
      const userId = authStore.user?.id;
      const chatRoomName = chatRoomsStore.openedChatRoom?.name;
      if (!self.readersMap.get(userId!!)) {
        DataLayer.Readers.readMessage(chatRoomName!!, self.id, userId!!);
      }
    }

    return {readMessage};
  })
  .views(self => ({
    get isAuthUserMessage() {
      return self.owner.id === authStore.user?.id;
    },
    get messageOwnerAsParticipant(): IParticipant {
      return chatRoomsStore.openedChatRoom?.getParticipant(
        self.owner.id,
      ) as IParticipant;
    },
    get readers() {
      return Array.from(self.readersMap.values());
    },
  }));

export interface IMessage extends Instance<typeof Message> {}
