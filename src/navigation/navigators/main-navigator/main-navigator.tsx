import {ChatRoomsStackNavigator} from '@navigation/navigators/chat-rooms-navigator';
import {SettingsStackNavigator} from '@navigation/navigators/settings-navigator';
import {AppRoutes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {R} from '@res';
import React, {useCallback} from 'react';

import {ChatIcon, SettingsIcon, styles} from './main-navigator.styles';

const MainTabs = createBottomTabNavigator();

export function MainTabsNavigator() {
  const renderChatIcon = useCallback((props: {color: string}) => {
    return <ChatIcon tintColor={props.color} />;
  }, []);

  const renderSettingsIcon = useCallback((props: {color: string}) => {
    return <SettingsIcon tintColor={props.color} />;
  }, []);

  return (
    <MainTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: R.colors.appTheme.primary,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <MainTabs.Screen
        name={AppRoutes.ChatRoomsNavigator}
        component={ChatRoomsStackNavigator}
        options={{
          tabBarLabel: R.strings.chat,
          tabBarIcon: renderChatIcon,
        }}
      />
      <MainTabs.Screen
        name={AppRoutes.SettingsNavigator}
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: R.strings.settings,
          tabBarIcon: renderSettingsIcon,
        }}
      />
    </MainTabs.Navigator>
  );
}
