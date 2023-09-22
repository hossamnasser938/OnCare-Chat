import {useAppStartup} from '@hooks';
import {AuthStackNavigator} from '@navigation/navigators/auth-navigator';
import {MainTabsNavigator} from '@navigation/navigators/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';

export const AppNavigator = observer(() => {
  const {isUserAuth, initialized} = useAppStartup();

  return (
    <NavigationContainer>
      {initialized ? (
        isUserAuth ? (
          <MainTabsNavigator />
        ) : (
          <AuthStackNavigator />
        )
      ) : null}
    </NavigationContainer>
  );
});
