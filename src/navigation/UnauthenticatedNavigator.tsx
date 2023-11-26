import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OnboardingStack, SignUpStack } from './stacks';
import { UnauthenticatedNavigatorParamsList } from './types';
import { ROUTES } from './routes';

import { useAsyncStorageContext } from '../providers/AsyncStorageProvider';

const UnauthenticatedStack =
  createStackNavigator<UnauthenticatedNavigatorParamsList>();

export const UnauthenticatedNavigator = () => {
  const { data, isLoading } = useAsyncStorageContext();

  return !isLoading ? (
    <UnauthenticatedStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        !data.hasCreatedOneUser ? ROUTES.ONBOARDING_STACK : ROUTES.SIGN_UP_STACK
      }
    >
      <UnauthenticatedStack.Screen
        name={ROUTES.ONBOARDING_STACK}
        component={OnboardingStack}
      />
      <UnauthenticatedStack.Screen
        name={ROUTES.SIGN_UP_STACK}
        component={SignUpStack}
      />
    </UnauthenticatedStack.Navigator>
  ) : null;
};
