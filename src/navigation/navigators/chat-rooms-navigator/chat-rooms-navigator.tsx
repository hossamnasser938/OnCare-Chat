import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatRoomScreen,
  ChatRoomsListScreen,
  CreateChatRoomScreen,
} from '@screens';
import React from 'react';

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
      <ChatRoomsStack.Screen
        name={AppRoutes.CreateChatRoomScreen}
        component={CreateChatRoomScreen}
        options={{presentation: 'modal'}}
      />
    </ChatRoomsStack.Navigator>
  );
}
