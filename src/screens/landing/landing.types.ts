import {AppRoutes} from '@navigation';
import {IAuthNavigationProp, IAuthRoutProp} from '@navigation/types';

export interface ILandingViewProps {
  loginHandler: () => void;
  signupHandler: () => void;
}

export interface ILandingScreenProps {
  navigation: IAuthNavigationProp<AppRoutes.LandingScreen>;
  route: IAuthRoutProp<AppRoutes.LandingScreen>;
}
