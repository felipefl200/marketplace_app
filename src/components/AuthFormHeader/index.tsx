import { FC } from 'react'
import { Image, Text, View } from 'react-native'

interface AuthFormHeaderProps {
  title: string
  subtitle: string
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({ title, subtitle }) => {
  return (
    <View className="items-center mb-8">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/Logo.png')}
          className="w-[80px] h-[60px]"
        />
      </View>
      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>
      <Text className="text-base text-gray-300">{subtitle}</Text>
    </View>
  )
}
