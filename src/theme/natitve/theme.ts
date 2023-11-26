import { Theme } from './types';

import {
  fontWeights,
  fontSizes,
  fonts,
  radii,
  borderWidths,
  spacings,
  colors,
  letterSpacing,
} from '../slices';
import { ThemeName } from '../types';

const baseTheme = {
  spacings,
  borderWidths,
  fontSizes,
  fonts,
  fontWeights,
  radii,
  colors,
  letterSpacing,
};

export const lightTheme = { ...baseTheme };
export const darkTheme = { ...baseTheme };

export const themes: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
