'use client'

import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
      })

      if (res.ok) {
        router.push('/login')
        router.refresh()
      }
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className='px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition duration-200'
    >
      Logout
    </button>
  )
}
