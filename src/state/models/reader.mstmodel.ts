import {Instance, types} from 'mobx-state-tree';

import {chatRoomsStore} from './chat-rooms.mstmodel';
import {IParticipant} from './participant.mstmodel';
import {User} from './user.mstmodel';

export const Reader = types
  .model('Reader', {
    user: types.reference(User),
    readAt: types.number,
  })
  .views(self => ({
    get readerAsParticipant(): IParticipant {
      return chatRoomsStore.openedChatRoom?.getParticipant(
        self.user.id,
      ) as IParticipant;
    },
  }));

export interface IReader extends Instance<typeof Reader> {}
