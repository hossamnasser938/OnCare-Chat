import {DataLayer} from '@data-layer';
import {IDBUser} from '@data-layer/types';
import {flow, types} from 'mobx-state-tree';

import {User} from './user.mstmodel';

export const UsersStore = types
  .model('UsersStore', {
    users: types.map(User),
  })
  .actions(self => {
    const fetchUser = flow(function* (id: string) {
      if (!self.users.get(id)) {
        const dbUser = yield DataLayer.Users.getUserFromDB(id);
        keepUser(dbUser);
      }
    });

    const fetchUsers = flow(function* (ids: string[]) {
      for (let i = 0; i < ids.length; i++) {
        yield fetchUser(ids[i]);
      }
    });

    function keepUser(dbUser: IDBUser) {
      const user = User.create(dbUser);
      self.users.put(user);
      return user;
    }

    return {fetchUser, keepUser, fetchUsers};
  });

export const usersStore = UsersStore.create();
