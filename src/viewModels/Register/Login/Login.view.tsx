import { Text, TouchableOpacity } from 'react-native'

import { router } from 'expo-router'

import { AuthFormHeader } from '@/components/AuthFormHeader'
import { KeyboardContainer } from '@/components/KeyboardContainer'

export default function LoginView() {
  return (
    <KeyboardContainer>
      <AuthFormHeader
        title="Boas-vindas de volta"
        subtitle="Informe seus dados para acessar sua conta"
      />
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </KeyboardContainer>
  )
}
