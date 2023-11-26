import React from 'react';
import { Appearance } from 'react-native';

import { ThemeContext } from './context';

import { ThemeName, nativeThemes as themes } from '../../theme';

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeName>('light');

  const theme = React.useMemo(() => {
    return themes[selectedTheme];
  }, [selectedTheme]);

  const setCurrentTheme = React.useCallback((themeName: ThemeName) => {
    setSelectedTheme(themeName);
  }, []);

  React.useEffect(() => {
    //const deviceColorScheme = Appearance.getColorScheme();

    Appearance.addChangeListener((preferences) => {
      if (preferences?.colorScheme) {
        setSelectedTheme('light');
      }
    });
    setSelectedTheme('light');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setCurrentTheme,
        currentTheme: selectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
