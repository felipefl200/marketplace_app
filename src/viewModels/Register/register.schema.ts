import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Nome deve ter pelo menos 3 caracteres')
      .max(120, 'Nome deve ter no máximo 120 caracteres'),
    email: z.email('Email inválido'),
    phone: z
      .string()
      .min(11, 'Telefone inválido')
      .max(11, 'Telefone inválido')
      .refine((value) => /^\d+$/.test(value), 'Telefone inválido'), // (51) 98488-9999
    password: z
      .string()
      .min(8, 'Senha deve ter pelo menos 8 caracteres')
      .max(120, 'Senha deve ter no máximo 120 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'Senha deve ter pelo menos 8 caracteres')
      .max(120, 'Senha deve ter no máximo 120 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterViewModelParams = z.infer<typeof registerSchema>
