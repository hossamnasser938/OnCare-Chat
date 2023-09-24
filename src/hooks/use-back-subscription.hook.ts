import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const useBackSubscription = (cb: () => void) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', cb);
    return unsubscribe;
  }, [cb, navigation]);
};
