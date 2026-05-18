import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { AppInputController } from '@/components/AppInputController'
import { AuthFormHeader } from '@/components/AuthFormHeader'
import { KeyboardContainer } from '@/components/KeyboardContainer'

import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os dados abaixo para criar sua conta"
        />
        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          keyboardType="email-address"
          name="name"
          control={control}
        />
        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          keyboardType="email-address"
          name="email"
          control={control}
        />
        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          keyboardType="email-address"
          name="phone"
          control={control}
        />
        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          keyboardType="email-address"
          name="password"
          control={control}
          secureTextEntry
        />
        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          keyboardType="email-address"
          name="confirmPassword"
          control={control}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="font-bold text-purple-base">Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  )
}
