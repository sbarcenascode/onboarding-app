import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUpStepOneScreen, SignUpStepTwoScreen } from '../../../screens';
import { ROUTES } from '../../routes';
import { SignUpStackNavigatorParamList } from '../../types';

const Stack = createStackNavigator<SignUpStackNavigatorParamList>();

export const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.SIGN_UP_STEP_ONE_SCREEN}
        component={SignUpStepOneScreen}
      />
      <Stack.Screen
        name={ROUTES.SIGN_UP_STEP_TWO_SCREEN}
        component={SignUpStepTwoScreen}
      />
    </Stack.Navigator>
  );
};
