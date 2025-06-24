// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('authToken')?.value

  if (pathname.startsWith('/tasker')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      await verifyToken(token)
      return NextResponse.next()
    } catch (error) {
      console.error('Auth failed:', error)

      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('authToken')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/tasker/:path*'],
}
