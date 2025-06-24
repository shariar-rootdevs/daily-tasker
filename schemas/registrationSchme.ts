import { z } from 'zod'

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name cannot exceed 50 characters'),

    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name cannot exceed 50 characters'),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .max(100, 'Email cannot exceed 100 characters')
      .refine((email) => email.trim().length > 0, 'Email cannot be just spaces'),

    phone: z
      .string()
      .min(1, 'Phone number is required')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .regex(/^[0-9+\-() ]+$/, 'Invalid phone number format'),

    address: z
      .string()
      .min(1, 'Address is required')
      .min(10, 'Address must be at least 10 characters')
      .max(200, 'Address cannot exceed 200 characters'),

    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Password cannot exceed 50 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),

    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

export type RegistrationSchema = z.infer<typeof registrationSchema>
