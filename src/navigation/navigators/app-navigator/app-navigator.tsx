import {useAppStartup} from '@hooks';
import {AuthStackNavigator} from '@navigation/navigators/auth-navigator';
import {MainTabsNavigator} from '@navigation/navigators/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export function AppNavigator() {
  const {isUserAuth} = useAppStartup();

  return (
    <NavigationContainer>
      {isUserAuth ? <MainTabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
