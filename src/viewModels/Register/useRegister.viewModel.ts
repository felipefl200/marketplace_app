import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useRegisterMutation } from '@/shared/queries/auth/use-resgister.mutation'
import { useUserStore } from '@/shared/store/user-store'

import { registerSchema, RegisterViewModelParams } from './register.schema'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterViewModelParams>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: 'Felipe',
      email: 'felipefl200@10minutemail.com',
      phone: '11999999999',
      password: '123123123',
      confirmPassword: '123123123',
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...rest } = userData

    const mutationResponse = await userRegisterMutation.mutateAsync(rest)
    setSession({
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
      user: mutationResponse.user,
    })
  })

  return {
    onSubmit,
    control,
    errors,
  }
}
