import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const ChatRoomsListScreen = () => (
  <View>
    <Text>ChatRoomsListScreen</Text>
  </View>
);

const ChatRoomScreen = () => (
  <View>
    <Text>ChatRoomScreen</Text>
  </View>
);

const ChatRoomsStack = createNativeStackNavigator();

export function ChatRoomsStackNavigator() {
  return (
    <ChatRoomsStack.Navigator screenOptions={{headerShown: false}}>
      <ChatRoomsStack.Screen
        name={AppRoutes.ChatRoomsListScreen}
        component={ChatRoomsListScreen}
      />
      <ChatRoomsStack.Screen
        name={AppRoutes.ChatRoomScreen}
        component={ChatRoomScreen}
      />
    </ChatRoomsStack.Navigator>
  );
}
