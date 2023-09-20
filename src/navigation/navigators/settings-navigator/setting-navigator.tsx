import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const SettingsScreen = () => (
  <View>
    <Text>SettingsScreen</Text>
  </View>
);

const SettingsStack = createNativeStackNavigator();

export function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={AppRoutes.SettingsScreen}
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}
