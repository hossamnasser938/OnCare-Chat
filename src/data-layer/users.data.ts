import {DB} from './db';
import {IDBUser} from './types';

export const Users = {
  async getUserFromDB(id: string): Promise<IDBUser> {
    const snapshot = await DB.USERS_REF.child(id).once('value');
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('Unexpected .. User not found in DB');
    }
  },

  async createUserInDB(dbUser: IDBUser) {
    return DB.USERS_REF.child(dbUser.id).set(dbUser);
  },
};
