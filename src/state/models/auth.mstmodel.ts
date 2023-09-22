import {DataLayer} from '@data-layer';
import {flow, types} from 'mobx-state-tree';

import {IUser, User} from './user.mstmodel';

export const AuthStore = types
  .model({
    initialized: false,
    user: types.maybeNull(User),
  })
  .views(self => ({
    get isAuth() {
      return !!self.user;
    },
  }))
  .actions(self => {
    function setInitialized() {
      self.initialized = true;
    }

    function setUser(user: IUser) {
      self.user = User.create(user);
    }

    function clearUser() {
      self.user = null;
    }

    const signin = flow(function* (email: string, password: string) {
      const user: IUser = yield DataLayer.Auth.signin(email, password);

      setUser(user);
    });

    const signup = flow(function* (
      email: string,
      password: string,
      firstName: string,
      lastName: string,
    ) {
      const user: IUser = yield DataLayer.Auth.signup(
        email,
        password,
        firstName,
        lastName,
      );

      setUser(user);
    });

    const logout = flow(function* () {
      yield DataLayer.Auth.logout();
    });

    return {
      setInitialized,
      setUser,
      clearUser,
      signin,
      signup,
      logout,
    };
  });
