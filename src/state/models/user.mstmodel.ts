import {Instance, types} from 'mobx-state-tree';

export const User = types
  .model('User', {
    id: types.identifier,
    email: '',
    firstName: '',
    lastName: '',
  })
  .views(self => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
    get userNameShortCut() {
      return self.firstName && self.lastName
        ? `${self.firstName[0]}${self.lastName[0]}`.toUpperCase()
        : '';
    },
  }));

export interface IUser extends Instance<typeof User> {}
