import { FC } from 'react'
import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { appInputVariants, AppInputVariantsProps } from './input.variants'
import { useAppInputViewModel } from './useAppInputModel'

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => string | void
  error?: string
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  mask,
  value,
  isError,
  secureTextEntry,
  onFocus,
  onBlur,
  onChangeText,
  error,
  isDisabled,
  ...props
}) => {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused,
    showPassword,
  } = useAppInputViewModel({
    onBlur,
    onFocus,
    isError: isError || !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  })
  const styles = appInputVariants({
    isFocused,
    isError: isError || !!error,
    isDisabled,
  })
  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wraper()}>
        {leftIcon && <Ionicons color={getIconColor()} className="mr-2" name={leftIcon} size={22} />}
        <TextInput
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          className={styles.input()}
          secureTextEntry={showPassword}
          value={value}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={getIconColor()}
            />
          </TouchableOpacity>
        )}
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          <Ionicons className="ml-2" name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  )
}
