import {AppRoutes} from '@navigation/routes';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ISettingsParamList = {
  [AppRoutes.SettingsScreen]: undefined;
};

export type ISettingsRoute = keyof ISettingsParamList;

export type ISettingsNavigationProp<R extends ISettingsRoute> =
  NativeStackNavigationProp<ISettingsParamList, R>;

export type ISettingsRoutProp<R extends ISettingsRoute> = RouteProp<
  ISettingsParamList,
  R
>;
