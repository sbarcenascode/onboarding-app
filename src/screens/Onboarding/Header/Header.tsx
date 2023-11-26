import React from 'react';
import { View } from 'react-native';

import { useStyle } from './styles';

import { Icon, Image, Space } from '../../../components';
import { useTheme } from '../../../providers';

export const Header = () => {
  const styles = useStyle();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Icon iconName="dolarRide" width={80} height={20} />
      <Space height={theme.spacings['3xl']} />
      <View style={styles.dottedIconWrapper}>
        <Image imageName="dotedLine" />
      </View>
    </View>
  );
};
