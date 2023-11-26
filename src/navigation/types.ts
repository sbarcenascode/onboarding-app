import { NavigatorScreenParams } from '@react-navigation/native';

import { ROUTES } from './routes';

type CommonRouteParams = {
  showUserBar?: boolean;
};

export type UnauthenticatedNavigatorParamsList = {
  [ROUTES.ONBOARDING_STACK]?: CommonRouteParams;
  [ROUTES.SIGN_UP_STACK]?: CommonRouteParams;
};

export type OnboardingStackNavigatorParamList = {
  [ROUTES.ONBOARDING_SCREEN]?: CommonRouteParams;
};

export type SignUpStackNavigatorParamList = {
  [ROUTES.SIGN_UP_STEP_ONE_SCREEN]?: CommonRouteParams;
  [ROUTES.SIGN_UP_STEP_TWO_SCREEN]: CommonRouteParams & {
    prevFormValues: { firstName: string; lastName: string; email: string };
  };
};

export type RootNavigationParamLists = {
  [ROUTES.ONBOARDING_STACK]: NavigatorScreenParams<OnboardingStackNavigatorParamList>;
  [ROUTES.SIGN_UP_STACK]: NavigatorScreenParams<SignUpStackNavigatorParamList>;
};
