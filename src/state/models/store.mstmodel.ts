import {types} from 'mobx-state-tree';

import {AuthStore, authStore} from './auth.mstmodel';
import {ChatRoomsStore, chatRoomsStore} from './chat-rooms.mstmodel';

export const MSTStore = types.model('RootStore', {
  authStore: AuthStore,
  chatRoomsStore: ChatRoomsStore,
});

export const mstStore = MSTStore.create({
  authStore,
  chatRoomsStore,
});
