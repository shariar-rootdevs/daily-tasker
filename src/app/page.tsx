import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100'>
      {/* Header with Auth Buttons */}
      <header className='bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Image
              src='/logo.png'
              alt='TaskMaster Pro'
              width={40}
              height={40}
              className='rounded-lg'
            />
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
              TaskMaster Pro
            </span>
          </div>
          <div className='flex space-x-4'>
            <Link
              href='/login'
              className='px-6 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all'
            >
              Login
            </Link>
            <Link
              href='/register'
              className='px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md'
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-16'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2 space-y-8'>
            <h1 className='text-5xl font-bold text-gray-800 leading-tight'>
              Organize Your Life, <br />
              <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                Supercharge Your Productivity
              </span>
            </h1>
            <p className='text-xl text-gray-600'>
              The premium task management app that helps you focus on what really matters. Join
              thousands of professionals achieving more every day.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='/register'
                className='px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg transition-all font-medium'
              >
                Start Free Trial
              </Link>
              <Link
                href='/features'
                className='px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all font-medium'
              >
                See Features
              </Link>
            </div>
          </div>
          <div className='md:w-1/2'>
            <Image
              src='/todo-app-screenshot.png'
              alt='TaskMaster Pro Dashboard'
              width={600}
              height={500}
              className='rounded-xl shadow-2xl border-8 border-white'
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className='mt-24 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto'>
          <h2 className='text-2xl font-bold text-center mb-8'>
            Trusted by Professionals Worldwide
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                quote: 'This app changed how I work. 30% more productive!',
                name: 'Sarah K.',
                title: 'Marketing Director',
              },
              {
                quote: "Worth every penny. The best investment I've made.",
                name: 'Michael T.',
                title: 'Software Engineer',
              },
              {
                quote: 'Simple yet powerful. Perfect for my team.',
                name: 'David L.',
                title: 'Startup Founder',
              },
            ].map((testimonial, index) => (
              <div key={index} className='bg-gray-50 p-6 rounded-lg'>
                <p className='font-semibold'>{testimonial.name}</p>
                <p className='text-sm text-gray-500'>{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-12 mt-16'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-6 md:mb-0'>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/logo-white.png'
                  alt='TaskMaster Pro'
                  width={40}
                  height={40}
                  className='rounded-lg'
                />
                <span className='text-2xl font-bold'>TaskMaster Pro</span>
              </div>
              <p className='mt-2 text-gray-400'>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className='flex space-x-8'>
              <Link href='/privacy' className='hover:text-indigo-300 transition'>
                Privacy
              </Link>
              <Link href='/terms' className='hover:text-indigo-300 transition'>
                Terms
              </Link>
              <Link href='/contact' className='hover:text-indigo-300 transition'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
