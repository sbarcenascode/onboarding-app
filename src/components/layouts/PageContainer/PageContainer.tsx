import React from 'react';
import { View } from 'react-native';

import { useStyle } from './styles';
import { Props } from './types';

export const PageContainer = (props: Props) => {
  const children = props.children;
  const styles = useStyle();

  return <View style={styles.container}>{children}</View>;
};
