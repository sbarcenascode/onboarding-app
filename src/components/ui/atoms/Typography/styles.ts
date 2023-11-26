import { createUseStyle } from '../../../../hooks';

export const useStyle = createUseStyle((theme, props?: { color?: string }) => ({
  'poppins-body-semi-bold': {
    fontSize: theme.fontSizes.m,
    fontFamily: theme.fonts.poppins,
    fontWeight: theme.fontWeights.semiBold,
    letterSpacing: theme.letterSpacing.xs,
    color: props?.color || theme.colors.background,
  },
  'poppins-h3': {
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.poppins,
    fontWeight: theme.fontWeights.medium,
    color: props?.color || theme.colors.background,
  },
  'roboto-h1': {
    fontSize: theme.fontSizes['3xl'],
    fontFamily: theme.fonts.roboto,
    fontWeight: theme.fontWeights.bold,
    color: props?.color || theme.colors.background,
  },
  'roboto-body-x-small-medium': {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fonts.roboto,
    fontWeight: theme.fontWeights.bold,
    color: props?.color || theme.colors.background,
  },
  'roboto-body': {
    fontSize: theme.fontSizes.m,
    fontFamily: theme.fonts.roboto,
    fontWeight: theme.fontWeights.normal,
    color: props?.color || theme.colors.background,
  },
  'rubik-body-small': {
    fontSize: theme.fontSizes.s,
    fontFamily: theme.fonts.rubik,
    fontWeight: theme.fontWeights.normal,
    color: props?.color || theme.colors.background,
  },
  'noLineHeight': {
    lineHeight: 0,
  },
  'textAlignleft': {
    textAlign: 'left',
  },
  'textAlignright': {
    textAlign: 'right',
  },
  'textAligncenter': {
    textAlign: 'center',
  },
}));
