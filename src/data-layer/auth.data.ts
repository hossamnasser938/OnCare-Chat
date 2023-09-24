import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {IDBUser} from './types';
import {Users} from './users.data';

export const Auth = {
  async signin(email: string, password: string): Promise<IDBUser> {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    const dbUser = await Users.getUserFromDB(user.uid);
    return dbUser;
  },

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<IDBUser> {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    await Users.createUserInDB({id: user.uid, email, firstName, lastName});
    return {id: user.uid, email, firstName, lastName};
  },

  logout() {
    return auth().signOut();
  },

  subscribe(
    cb: (firebaseUser: FirebaseAuthTypes.User | null) => void,
  ): () => void {
    return auth().onAuthStateChanged(cb);
  },
};
