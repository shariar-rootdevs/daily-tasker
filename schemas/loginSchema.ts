import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email format'),
  password: z.string().nonempty('Password is required'),
})

export type LoginSchema = z.infer<typeof loginSchema>
