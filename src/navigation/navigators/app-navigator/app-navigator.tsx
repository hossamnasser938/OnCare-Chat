import {useAppStartup} from '@hooks';
import {AuthStackNavigator} from '@navigation/navigators/auth-navigator';
import {MainTabsNavigator} from '@navigation/navigators/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';

export const AppNavigator = observer(() => {
  const {isUserAuth} = useAppStartup();

  return (
    <NavigationContainer>
      {isUserAuth ? <MainTabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
});
