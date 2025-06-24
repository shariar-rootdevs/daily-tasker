import { readDB, writeDb } from '@/utils/helper'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { UserRegistrationInput } from '../../../../types/register'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as UserRegistrationInput
    const { firstName, lastName, email, phone, address, password, confirmPassword } = body

    if (!firstName || !lastName || !email || !phone || !address || !password || !confirmPassword) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
    }

    const db = await readDB()

    const emailExists = db.users.some((user) => user.email === email)
    if (emailExists) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }

    const hashedPassword = await hash(password, 10)

    const newUser = {
      id: db.users.length + 1,
      firstName,
      lastName,
      email,
      phone,
      address,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    }

    db.users.push(newUser)
    await writeDb(db)

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Registration Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
