import {DataLayer} from '@data-layer';
import {flow, types} from 'mobx-state-tree';

import {IUser, User} from './user.mstmodel';

export const AuthStore = types
  .model({
    user: types.maybeNull(User),
  })
  .views(self => ({
    get isAuth() {
      return !!self.user;
    },
  }))
  .actions(self => {
    function setUser(user: IUser) {
      self.user = User.create(user);
    }

    function clearUser() {
      self.user = null;
    }

    const signin = flow(function* (email: string, password: string) {
      yield DataLayer.Auth.signin(email, password);
    });

    const signup = flow(function* (
      email: string,
      password: string,
      firstName: string,
      lastName: string,
    ) {
      yield DataLayer.Auth.signup(email, password, firstName, lastName);
    });

    const logout = flow(function* () {
      yield DataLayer.Auth.logout();
    });

    return {
      setUser,
      clearUser,
      signin,
      signup,
      logout,
    };
  });
