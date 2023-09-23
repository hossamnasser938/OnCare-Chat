import {AppRoutes} from '@navigation/routes';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type IChatRoomsParamList = {
  [AppRoutes.ChatRoomsListScreen]: undefined;
  [AppRoutes.ChatRoomScreen]: undefined;
  [AppRoutes.CreateChatRoomScreen]: undefined;
};

export type IChatRoomsRoute = keyof IChatRoomsParamList;

export type IChatRoomsNavigationProp<R extends IChatRoomsRoute> =
  NativeStackNavigationProp<IChatRoomsParamList, R>;

export type IChatRoomsRoutProp<R extends IChatRoomsRoute> = RouteProp<
  IChatRoomsParamList,
  R
>;
