import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OnboardingScreen } from '../../../screens';
import { OnboardingStackNavigatorParamList } from '../../types';
import { ROUTES } from '../../routes';

const Stack = createStackNavigator<OnboardingStackNavigatorParamList>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
    </Stack.Navigator>
  );
};
