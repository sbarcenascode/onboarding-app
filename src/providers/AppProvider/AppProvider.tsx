import React from 'react';

import { Props } from './types';

import { ThemeProvider } from '../ThemeProvider';
import { AsyncStorageProvider } from '../AsyncStorageProvider';
import { UserProvider } from '../UserProvider';

export function AppProvider(props: Props) {
  const { children } = props;

  return (
    <AsyncStorageProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </AsyncStorageProvider>
  );
}
