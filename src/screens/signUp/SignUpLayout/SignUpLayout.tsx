import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useStyle } from './styles';
import { Props } from './types';
import { GoBack } from './GoBack';

import { Image, Typography } from '../../../components';
import { useTheme } from '../../../providers';

export const SignUpLayout = ({
  children,
  title,
  showGoBack,
  testID,
}: Props) => {
  const styles = useStyle();
  const { theme } = useTheme();

  return (
    <View style={styles.container} testID={testID}>
      {showGoBack ? <GoBack testID={`${testID}_goBack`} /> : null}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={styles.flex}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.avatarIconWrapper}>
              <Image imageName="avatarPlaceholder" width={66} height={66} />
            </View>
            <Typography variant="poppins-h3" color={theme.colors.foreground}>
              {title || 'Hi, Isabella'}
            </Typography>
          </View>
          <View style={styles.body}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
