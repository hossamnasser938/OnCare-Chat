import {AppRoutes} from '@navigation/routes';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type IAuthParamList = {
  [AppRoutes.LandingScreen]: undefined;
  [AppRoutes.SigninScreen]: undefined;
  [AppRoutes.SignupScreen]: undefined;
};

export type IAuthRoute = keyof IAuthParamList;
export type IAuthNavigationProp<R extends IAuthRoute> =
  NativeStackNavigationProp<IAuthParamList, R>;
export type IAuthRoutProp<R extends IAuthRoute> = RouteProp<IAuthParamList, R>;
