import { ComponentProps, ReactNode } from 'react';
import { Text } from 'react-native';

export type TypographyVariant =
  | 'poppins-body-semi-bold'
  | 'poppins-h3'
  | 'roboto-h1'
  | 'roboto-body-x-small-medium'
  | 'roboto-body'
  | 'rubik-body-small';

export type TypographyTextAlign = 'left' | 'center' | 'right';

export type TypographyProps = {
  variant?: TypographyVariant;
  color?: string;
  children?:
    | JSX.Element
    | (JSX.Element | string)[]
    | string
    | number
    | ReactNode;
  onPress?: () => void;
  noLineHeight?: boolean;
  textAlign?: TypographyTextAlign;
} & ComponentProps<typeof Text>;
