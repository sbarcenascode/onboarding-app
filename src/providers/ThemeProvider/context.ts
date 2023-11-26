import React from 'react';

import { ThemeContextType } from './types';

import { nativeThemes as themes } from '../../theme';

const lightTheme = themes.light;

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: lightTheme,
} as ThemeContextType);
