import {Instance, types} from 'mobx-state-tree';

import {authStore} from './auth.mstmodel';

export const Message = types
  .model('Message', {
    id: types.identifier,
    text: types.string,
    owner: types.string,
    createdAt: types.number,
  })
  .views(self => ({
    get isAuthUserMessage() {
      return self.owner === authStore.user?.id;
    },
  }));

export interface IMessage extends Instance<typeof Message> {}
