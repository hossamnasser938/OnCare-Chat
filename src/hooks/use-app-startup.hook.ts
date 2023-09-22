import auth from '@react-native-firebase/auth';
import {useMSTStore} from '@state';
import {useEffect} from 'react';

export const useAppStartup = () => {
  const {authStore} = useMSTStore();

  const isAuth = authStore.isAuth;

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user && user.email) {
        const {uid, email} = user;
        authStore.setUser({id: uid, email, firstName: '', lastName: ''});
      } else {
        authStore.clearUser();
      }
    });
    return unsubscribe;
  }, [authStore]);

  return {isUserAuth: isAuth};
};
