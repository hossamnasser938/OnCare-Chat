import auth from '@react-native-firebase/auth';

export const Auth = {
  signin(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password);
  },
  signup(email: string, password: string, firstName: string, lastName: string) {
    return auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return auth().signOut();
  },
};
