//*Santiago BELOW

/* import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';

import { testWrappers } from './testWrappers';

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: testWrappers, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
 */

import * as React from 'react';
import {
  render as RenderDefault,
  RenderOptions,
  RenderResult,
} from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from '../providers';

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <AppProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </AppProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => RenderDefault(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
