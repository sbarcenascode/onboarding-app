import { RouteProp } from '@react-navigation/native';

import { SignUpStackNavigatorParamList, ROUTES } from '../../../navigation';

export type Props = {
  route: RouteProp<
    SignUpStackNavigatorParamList,
    ROUTES.SIGN_UP_STEP_TWO_SCREEN
  >;
};
