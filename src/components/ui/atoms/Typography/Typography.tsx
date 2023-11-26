import React from 'react';
import { Text } from 'react-native';

import { TypographyProps } from './types';
import { useStyle } from './styles';

export const Typography: React.FC<TypographyProps> = ({
  children,
  color,
  variant = 'roboto-body',
  testID,
  style,
  noLineHeight,
  textAlign = 'left',
  ...props
}) => {
  const styles = useStyle({ color });
  const noLineHeightStyle = noLineHeight ? styles.noLineHeight : undefined;
  const textAlignStyle = styles[`textAlign${textAlign}`];

  return (
    <Text
      testID={testID}
      style={[styles[variant], noLineHeightStyle, textAlignStyle, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
