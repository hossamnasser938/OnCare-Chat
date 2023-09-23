import {AppRoutes} from '@navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatRoomsListScreen, CreateChatRoomScreen} from '@screens';
import React from 'react';
import {Text, View} from 'react-native';

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
      <ChatRoomsStack.Screen
        name={AppRoutes.CreateChatRoomScreen}
        component={CreateChatRoomScreen}
        options={{presentation: 'modal'}}
      />
    </ChatRoomsStack.Navigator>
  );
}
