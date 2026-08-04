import type { UserProfile } from '@/entities/user'

import { STORAGE_NAME } from '@/entities/user'

export const saveUser = (user: UserProfile): void => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(user))
}

export const getUser = (): UserProfile | null => {
  const data = localStorage.getItem(STORAGE_NAME)
  return data ? JSON.parse(data) : null
}

export const removeUser = (): void => {
  localStorage.removeItem(STORAGE_NAME)
}
