import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useStyle } from './styles';
import { Props } from './types';

import { Icon, Typography } from '../../../../components';
import { useTheme } from '../../../../providers';
import { EN_STRINGS } from '../../../../utils';


export const GoBack = ({ testID }: Props) => {
  const styles = useStyle();
  const { theme } = useTheme();
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Pressable onPress={handleGoBack} style={styles.container} testID={testID}>
      <Icon iconName="chevronLeft" width={24} height={24} />
      <Typography
        variant="poppins-body-semi-bold"
        color={theme.colors['blue-100']}
      >
        {EN_STRINGS.signUpScreen.goBack}
      </Typography>
    </Pressable>
  );
};
