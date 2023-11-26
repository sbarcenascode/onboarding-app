import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from '../providers';

export const testWrappers = ({ children }: PropsWithChildren) => (
  <AppProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </AppProvider>
);
