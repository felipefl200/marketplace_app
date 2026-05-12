import { useMutation } from '@tanstack/react-query'

import { register } from '@/shared/auth.service'
import { RegisterHttpParams } from '@/shared/interfaces/http/register'

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => register(userData),
    onSuccess: () => {
      console.log('success')
    },
    onError: (error: unknown) => {
      console.log(error)
    },
  })

  return mutation
}
