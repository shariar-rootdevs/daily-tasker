import { readDB } from '@/utils/helper'
import bcrypt from 'bcrypt'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { LoginInput } from '../../../../types/login'

const JWT_SECRET =
  process.env.JWT_SECRET || '9d22a27f63b440fd8adfac1cfa0122eaa264e99c2b72d3a7f83bb57e7e5f8c78'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginInput
    const { email, password } = body

    const db = await readDB()

    const user = db.users.find((u) => u.email === email)
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' })

    const serializedCookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = user

    const response = NextResponse.json({
      message: 'Login successful',
      user: userData,
      token,
    })

    response.headers.set('Set-Cookie', serializedCookie)
    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
