// app/api/logout/route.ts
import { serialize } from 'cookie'
import { NextResponse } from 'next/server'

export async function POST() {
  // Clear the cookie
  const serialized = serialize('authToken', '', {
    maxAge: -1, // Expire immediately
    path: '/',
  })

  const response = NextResponse.json({ message: 'Logged out' })
  response.headers.set('Set-Cookie', serialized)
  return response
}
