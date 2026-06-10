import { API_BASE_URL } from '@/shared/config/api'

import { LoginData, LoginResponse, RegisterData } from '../types'

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw new Error('Login failed')
    }

    return res.json()
}

export const registration = async (data: RegisterData): Promise<LoginResponse> => {
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw new Error('Login failed')
    }

    return res.json()
}