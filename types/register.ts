export interface UserRegistrationInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  password: string
  confirmPassword: string
}

export interface StoredUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  password: string
  createdAt: string
}

export interface DBStructure {
  users: StoredUser[]
}
