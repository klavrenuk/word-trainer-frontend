import { fetchWithAuth } from '@/shared/api/fetchInstance'

import type { User, UserProfile } from '@/entities/user'

import { API_BASE_URL } from '@/shared/config/api'

export const fetchProfile = async (): Promise<UserProfile> => {
    const res = await fetchWithAuth(`${API_BASE_URL}/api/profile`)
    return res.json()
}

export const checkAuth = async (): Promise<{ user: User | null, isAuth: boolean }> => {
    try {
        const res = await fetch(`${API_BASE_URL}/api/auth/me`)

        if (res.status === 401) {
            return { user: null, isAuth: true }
        }

        const user = await res.json()
        return { user, isAuth: true }
    } catch (err) {
        console.error(err)
        return { user: null, isAuth: true }
    }
}

export const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_BASE_URL}/api/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword
        })
    })

    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.detail || 'Ошибка при изменении пароля')
    }

    return res.json()
}

export const updateProfile = async (data: UserProfile): Promise<UserProfile> => {
  const formData = new FormData()
  formData.append('user_id', String(data.id))
  formData.append('name', data.name)

  const res = await fetch(`${API_BASE_URL}/api/profile`, {
    method: 'PUT',
    body: formData
  })

  if (!res.ok) {
      const error = await res.json()
      throw new Error(error.detail || 'Ошибка при изменении пароля')
  }

  return res.json()
}
