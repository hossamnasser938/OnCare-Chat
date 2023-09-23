import {AppRoutes} from '@navigation';
import {IChatRoomsNavigationProp, IChatRoomsRoutProp} from '@navigation/types';
import {IChatRoom} from '@state';

export interface IChatRoomsScreenProps {
  navigation: IChatRoomsNavigationProp<AppRoutes.ChatRoomsListScreen>;
  route: IChatRoomsRoutProp<AppRoutes.ChatRoomsListScreen>;
}

export interface IChatRoomsViewProps {
  createChatHandler: () => void;
  chatRooms: IChatRoom[];
}
