import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from '@screens';
import React from 'react';

const SettingsStack = createNativeStackNavigator();

export function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen
        name={AppRoutes.SettingsScreen}
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}
