import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { useTheme } from '../../providers';
import { NativeTheme as Theme } from '../../theme/natitve';

type Style<K extends string> = {
  [key in K]: ViewStyle | ImageStyle | TextStyle;
};
type ThemedStyle<K extends string, T extends object = object> = (
  theme: Theme,
  props?: T,
) => Style<K>;

export function createUseStyle<K extends string, P extends object>(
  style: Style<K> | StyleSheet.NamedStyles<Style<K>> | ThemedStyle<K, P>,
) {
  function useStyle(props?: P) {
    const { theme } = useTheme();

    if (typeof style === 'function') {
      return StyleSheet.create(style(theme, props));
    }

    return StyleSheet.create(style);
  }

  return useStyle;
}
