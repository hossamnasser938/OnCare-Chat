import {DataLayer, translateErrorCode} from '@data-layer';
import {useMSTStore} from '@state';
import {useEffect} from 'react';
import {Alert} from 'react-native';

export const useAppStartup = () => {
  const {authStore} = useMSTStore();

  const {isAuth, initialized} = authStore;

  useEffect(() => {
    const unsubscribe = DataLayer.Auth.subscribe(async firebaseUser => {
      if (!firebaseUser) {
        authStore.clearUser();
      } else {
        if (!authStore.user) {
          try {
            const dbUser = await DataLayer.Users.getUserFromDB(
              firebaseUser.uid,
            );
            authStore.setUser(dbUser);
          } catch (err: any) {
            Alert.alert(translateErrorCode(err.code));
          }
        }
      }
      authStore.setInitialized();
    });

    return unsubscribe;
  }, [authStore]);

  return {isUserAuth: isAuth, initialized};
};
