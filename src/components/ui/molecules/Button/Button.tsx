import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { getTypographyVariant, useSizeStyle, useVariantStyle } from './styles';
import { Props } from './types';

import { Typography } from '../../atoms';

// TODO: Add the icon accessory when the button is finished

export const Button: React.FC<Props> = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'normal',
  disabled = false,
  fullWidth,
  onPress,
  testID,
  ...props
}) => {
  const sizeStyles = useSizeStyle({
    fullWidth,
  });
  const variantStyles = useVariantStyle();
  const typographyVariant = getTypographyVariant(size);
  const variantStyle = variantStyles[`${colorScheme}-${variant}`];

  return (
    <View>
      <TouchableOpacity
        style={[sizeStyles[size], variantStyle]}
        onPress={onPress}
        disabled={disabled}
        testID={testID}
        accessible={true}
        {...props}
      >
        <View style={variantStyles.textWrapper}>
          <Typography
            accessible={true}
            variant={typographyVariant}
            testID={`${testID}_button_text`}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            /*@ts-ignore*/
            color={variantStyle['color']}
          >
            {children}
          </Typography>
        </View>
      </TouchableOpacity>
    </View>
  );
};
