import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UnauthenticatedNavigator } from './UnauthenticatedNavigator';

import { BaseLayout } from '../components';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BaseLayout>
        <UnauthenticatedNavigator />
      </BaseLayout>
    </NavigationContainer>
  );
};
