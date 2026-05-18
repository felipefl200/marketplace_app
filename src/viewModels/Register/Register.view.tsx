import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { AppInputController } from '@/components/AppInputController'
import { AuthFormHeader } from '@/components/AuthFormHeader'

import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subtitle="Informe os dados abaixo para criar sua conta"
      />
      <AppInputController
        leftIcon="mail-outline"
        label="E-MAIL"
        keyboardType="email-address"
        name="email"
        control={control}
      />
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-purple-base font-bold">Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
