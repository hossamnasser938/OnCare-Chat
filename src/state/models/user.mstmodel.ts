import {Instance, types} from 'mobx-state-tree';

export const User = types.model({
  id: '',
  email: '',
  firstName: '',
  lastName: '',
});

export interface IUser extends Instance<typeof User> {}
