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
      const dbUser = yield DataLayer.Users.getUserFromDB(id);
      keepUser(dbUser);
    });

    function keepUser(dbUser: IDBUser) {
      const user = User.create(dbUser);
      self.users.put(user);
      return user;
    }

    return {fetchUser, keepUser};
  });

export const usersStore = UsersStore.create();
