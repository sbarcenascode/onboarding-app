import { ButtonSize, StyleProps } from './types';

import { TypographyVariant } from '../../atoms';
import { createUseStyle } from '../../../../hooks';

const useSizeStyle = createUseStyle((theme, props?: StyleProps) => {
  return {
    normal: {
      fontSize: theme.fontSizes.m,
      paddingHorizontal: theme.spacings.xl,
      borderRadius: theme.radii.jumbo,
      flexDirection: 'row',
      alignSelf: !props?.fullWidth ? 'flex-start' : 'auto',
      justifyContent: 'center',
      height: 51,
    },
  };
});

export const getTypographyVariant = (size: ButtonSize) => {
  const map: Record<ButtonSize, TypographyVariant> = {
    normal: 'poppins-body-semi-bold',
  };

  return map[size];
};

const useVariantStyle = createUseStyle((theme) => ({
  'primary-solid': {
    backgroundColor: theme.colors['blue-100'],
    color: theme.colors.background,
  },

  'secondary-solid': {
    backgroundColor: theme.colors.background,
    color: theme.colors['light-blue'],
  },
  'textWrapper': {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export { useSizeStyle, useVariantStyle };
