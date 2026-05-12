import { Text, TouchableOpacity, View } from 'react-native'

import { Redirect, router } from 'expo-router'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base text-4xl font-black">Login</Text>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text className="text-purple-base font-bold">Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
