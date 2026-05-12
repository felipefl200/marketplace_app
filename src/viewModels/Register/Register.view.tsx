import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({ onSubmit }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base text-4xl font-black">Register</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-purple-base font-bold">Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
