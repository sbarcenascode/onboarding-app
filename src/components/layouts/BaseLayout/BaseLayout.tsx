import React from 'react';
import { View } from 'react-native';

import { Props } from './types';
import { useStyle } from './styles';

export const BaseLayout = (props: Props) => {
  const { children } = props;
  const styles = useStyle();

  return <View style={styles.flex}>{children}</View>;
};
