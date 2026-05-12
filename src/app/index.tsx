import { Text, View } from 'react-native'
import { router } from 'expo-router'

export default function App() {
  return (
    <View>
      <Text className="text-7xl text-red-500">App</Text>
      <Text onPress={() => router.push('/login')}>Login</Text>
    </View>
  )
}
