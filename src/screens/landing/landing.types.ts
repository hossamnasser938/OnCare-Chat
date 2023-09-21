import {AppRoutes} from '@navigation';
import {
  IAuthNavigationProp,
  IAuthRoutProp,
} from '@navigation/navigators/auth-navigator/auth-navigator.types';

export interface ILandingViewProps {
  loginHandler: () => void;
  signupHandler: () => void;
}

export interface ILandingScreenProps {
  navigation: IAuthNavigationProp<AppRoutes.LandingScreen>;
  route: IAuthRoutProp<AppRoutes.LandingScreen>;
}
