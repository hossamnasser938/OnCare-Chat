import {ChatRoomsStackNavigator} from '@navigation/navigators/chat-rooms-navigator';
import {SettingsStackNavigator} from '@navigation/navigators/settings-navigator';
import {AppRoutes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const MainTabs = createBottomTabNavigator();

export function MainTabsNavigator() {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen
        name={AppRoutes.ChatRoomsNavigator}
        component={ChatRoomsStackNavigator}
      />
      <MainTabs.Screen
        name={AppRoutes.SettingsNavigator}
        component={SettingsStackNavigator}
      />
    </MainTabs.Navigator>
  );
}
