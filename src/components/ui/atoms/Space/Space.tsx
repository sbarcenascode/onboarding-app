import React from 'react';
import { View } from 'react-native';

import { useStyle } from './styles';
import { Props } from './types';

export const Space = ({ height }: Props) => {
  const styles = useStyle({ height });

  return <View style={styles.container} />;
};
