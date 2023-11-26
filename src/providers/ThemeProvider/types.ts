import { NativeTheme as Theme, ThemeName } from '../../theme';

export type ThemeContextType = {
  theme: Theme;
  setCurrentTheme: (themeName: ThemeName) => void;
  currentTheme: ThemeName;
};
