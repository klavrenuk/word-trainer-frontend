import type { User } from '@/entities'

import { API_BASE_URL } from '@/shared/config/api'

export const fetchProfile = async (): Promise<User> => {
    const res = await fetch(`${API_BASE_URL}/api/profile`)
    return res.json()
}

export const checkAuth = async (): Promise<{ user: User | null, isAuth: boolean }> => {
    try {
        const token = localStorage.getItem('token')

        if (!token) {
            return {
                user: null,
                isAuth: false
            }
        }

        const res = await fetch('/api/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 401) {
            localStorage.removeItem('token')
            return {
                user: null,
                isAuth: false
            }
        }

        const user = await res.json()
        return {
            user: user,
            isAuth: true
        }

    } catch (err) {
        console.error(err)
        return {
            user: null,
            isAuth: false
        }
    }
}