import React, { useCallback, useRef, useState } from 'react';
import { View, TextInput as RNTextInput, Pressable } from 'react-native';

import { useStyle } from './styles';
import { Props } from './types';

import { Typography } from '../../atoms';
import { useTheme } from '../../../../providers';

export const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  errorMessage,
}: Props) => {
  const styles = useStyle();

  const textInputRef = useRef<RNTextInput>(null);

  const [focused, setFocused] = useState<boolean>(false);

  const { theme } = useTheme();

  const focusedStyle = focused ? styles.focused : undefined;

  const handleChangeText = useCallback(
    (text: string) => {
      onChangeText?.(text);
    },
    [onChangeText],
  );

  const handleOnBlur = () => {
    setFocused(false);
  };

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnPressOverContainer = () => {
    textInputRef.current?.focus();
  };

  return (
    <Pressable onPress={handleOnPressOverContainer}>
      <View style={[styles.container, focusedStyle]}>
        <Typography
          variant="roboto-body-x-small-medium"
          color={theme.colors['blue-100']}
        >
          {label || 'first name'}
        </Typography>
        <RNTextInput
          ref={textInputRef}
          value={value}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          placeholder={placeholder || 'test'}
          style={styles.textInput}
          onChangeText={handleChangeText}
        />
      </View>

      {errorMessage ? (
        <View style={styles.errorWrapper}>
          <Typography
            variant="roboto-body-x-small-medium"
            color={theme.colors['error-500']}
          >
            {errorMessage}
          </Typography>
        </View>
      ) : null}
    </Pressable>
  );
};
