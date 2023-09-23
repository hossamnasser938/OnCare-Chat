import {
  AppRoutes,
  IChatRoomsNavigationProp,
  IChatRoomsRoutProp,
} from '@navigation/types';

export interface IChatRoomScreenProps {
  navigation: IChatRoomsNavigationProp<AppRoutes.ChatRoomScreen>;
  route: IChatRoomsRoutProp<AppRoutes.ChatRoomScreen>;
}

export interface IChatRoomViewProps {}
