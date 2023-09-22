import {AppRoutes} from '@navigation';
import {
  IAuthNavigationProp,
  IAuthRoutProp,
} from '@navigation/navigators/auth-navigator/auth-navigator.types';

export type SignupFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export interface ISignupViewProps {
  onSubmit: (formData: SignupFormData) => void;
  signinHandler: () => void;
}

export interface ISignupScreenProps {
  navigation: IAuthNavigationProp<AppRoutes.SignupScreen>;
  route: IAuthRoutProp<AppRoutes.SignupScreen>;
}
