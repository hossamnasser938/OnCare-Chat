import {AppRoutes} from '@navigation';
import {ISettingsParamList} from '@navigation/navigators//settings-navigator/settings-navigator.types';
import {IChatRoomsParamList} from '@navigation/navigators/chat-rooms-navigator/chat-rooms-navigator.types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export type IMainTabsParamList = {
  [AppRoutes.ChatRoomsNavigator]: NavigatorScreenParams<IChatRoomsParamList>;
  [AppRoutes.SettingsNavigator]: NavigatorScreenParams<ISettingsParamList>;
};

export type IMainTabsRoute = keyof IMainTabsParamList;

export type IMainTabsNavigationProp<R extends IMainTabsRoute> =
  BottomTabNavigationProp<IMainTabsParamList, R>;

export type IMainTabsRoutProp<R extends IMainTabsRoute> = RouteProp<
  IMainTabsParamList,
  R
>;
