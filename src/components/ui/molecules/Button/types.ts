import { ComponentProps } from 'react';
import { Button } from 'react-native';

type ButtonVariant = 'solid';

type ColorScheme = 'primary' | 'secondary';

export type ButtonSize = 'normal';

export type Props = {
  children?: string | JSX.Element;
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  size?: ButtonSize;
  onPress?: () => void;
  fullWidth?: boolean;
  rounded?: boolean;
} & Omit<ComponentProps<typeof Button>, 'style' | 'title' | 'color'>;

export type StyleProps = Pick<Props, 'fullWidth' | 'rounded'>;
