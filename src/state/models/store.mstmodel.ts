import {types} from 'mobx-state-tree';

import {AuthStore, authStore} from './auth.mstmodel';
import {ChatRoomsStore, chatRoomsStore} from './chat-rooms.mstmodel';
import {UsersStore, usersStore} from './users.mstmodel';

export const MSTStore = types.model('RootStore', {
  authStore: AuthStore,
  chatRoomsStore: ChatRoomsStore,
  usersStore: UsersStore,
});

export const mstStore = MSTStore.create({
  authStore,
  chatRoomsStore,
  usersStore,
});
