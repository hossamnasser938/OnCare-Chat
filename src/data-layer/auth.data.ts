import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {IUser} from '@state/models/user.mstmodel';

import {DB} from './db';

export const Auth = {
  async signin(email: string, password: string): Promise<IUser> {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    const dbUser = await this.getUserFromDB(user.uid);
    return dbUser;
  },

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<IUser> {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    await this.createUserInDB(user.uid, email, firstName, lastName);
    return {id: user.uid, email, firstName, lastName};
  },

  logout() {
    return auth().signOut();
  },

  async createUserInDB(
    id: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    return DB.USERS_REF.child(id).set({id, email, firstName, lastName});
  },

  async getUserFromDB(id: string): Promise<IUser> {
    const snapshot = await DB.USERS_REF.child(id).once('value');
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('Unexpected .. User not found in DB');
    }
  },

  subscribe(
    cb: (firebaseUser: FirebaseAuthTypes.User | null) => void,
  ): () => void {
    return auth().onAuthStateChanged(cb);
  },
};
