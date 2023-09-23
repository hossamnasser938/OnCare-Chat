import {
  AppRoutes,
  IChatRoomsNavigationProp,
  IChatRoomsRoutProp,
} from '@navigation/types';

export type CreateChatRoomFormData = {
  name: string;
};

export interface ICreateChatRoomViewProps {
  onSubmit: (formData: CreateChatRoomFormData) => void;
  isLoading: boolean;
}

export interface ICreateChatRoomScreenProps {
  navigation: IChatRoomsNavigationProp<AppRoutes.ChatRoomsListScreen>;
  route: IChatRoomsRoutProp<AppRoutes.ChatRoomsListScreen>;
}
