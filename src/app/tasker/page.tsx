import { redirect } from 'next/navigation'
import { getSession } from '../../../lib/auth'
import { LogoutButton } from '../components/LogoutButton'
export default async function page() {
  const session = await getSession()
  if (!session) redirect('/login')
  return (
    <div>
      <header className='flex justify-between items-center p-4 border-b'>
        <h1>Protected Tasker Content</h1>
        <LogoutButton />
      </header>
      <main className='p-4'></main>
    </div>
  )
}
