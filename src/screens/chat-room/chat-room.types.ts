import {
  AppRoutes,
  IChatRoomsNavigationProp,
  IChatRoomsRoutProp,
} from '@navigation/types';
import {IChatRoom} from '@state';

export interface IChatRoomScreenProps {
  navigation: IChatRoomsNavigationProp<AppRoutes.ChatRoomScreen>;
  route: IChatRoomsRoutProp<AppRoutes.ChatRoomScreen>;
}

export interface IChatRoomViewProps {
  chatRoom: IChatRoom;
  goBack: () => void;
  sendMessageHandler: (text: string) => void;
}
