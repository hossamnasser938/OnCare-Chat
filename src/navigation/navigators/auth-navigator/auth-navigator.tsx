import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SigninScreen, SignupScreen} from '@screens';
import React from 'react';

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={AppRoutes.SigninScreen}
        component={SigninScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.SignupScreen}
        component={SignupScreen}
      />
    </AuthStack.Navigator>
  );
}
