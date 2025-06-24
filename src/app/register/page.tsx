'use client'
import { useForm } from 'react-hook-form'
import { UserRegistrationInput } from '../../../types/register'

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationInput>({
    mode: 'onTouched',
  })

  const onSubmit = (data: UserRegistrationInput) => {
    console.log(data)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='w-full max-w-lg mx-4 bg-white rounded-2xl shadow-xl p-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                First Name <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.firstName && (
                <p className='text-red-500 text-xs mt-1'>{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Last Name <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.lastName && (
                <p className='text-red-500 text-xs mt-1'>{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                type='email'
                {...register('email', { required: 'Email is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Phone <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                {...register('phone', { required: 'Phone is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone.message}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Password <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                type='password'
                {...register('password', { required: 'Password is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.password && (
                <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Confirm Password <span className='text-red-500 text-[14px]'>*</span>
              </label>
              <input
                type='password'
                {...register('confirmPassword', { required: 'Confirm password is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.confirmPassword ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.confirmPassword && (
                <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Address <span className='text-red-500 text-[14px]'>*</span>
            </label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              rows={3}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.address && (
              <p className='text-red-500 text-xs mt-1'>{errors.address.message}</p>
            )}
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
