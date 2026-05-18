import { Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { AuthFormHeader } from '@/components/AuthFormHeader'

export default function LoginView() {
  return (
    <View>
      <AuthFormHeader
        title="Boas-vindas de volta"
        subtitle="Informe seus dados para acessar sua conta"
      />
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}
