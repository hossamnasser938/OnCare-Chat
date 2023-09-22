import {AppRoutes} from '@navigation';
import {
  IAuthNavigationProp,
  IAuthRoutProp,
} from '@navigation/navigators/auth-navigator/auth-navigator.types';

export type SigninFormData = {
  email: string;
  password: string;
};

export interface ISigninViewProps {
  onSubmit: (formData: {email: string; password: string}) => void;
  signupHandler: () => void;
  isLoading: boolean;
}

export interface ISigninScreenProps {
  navigation: IAuthNavigationProp<AppRoutes.SigninScreen>;
  route: IAuthRoutProp<AppRoutes.SigninScreen>;
}
