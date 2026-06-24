import { API_BASE_URL } from '@/shared/config/api'

import { LoginResponse, RegisterData } from '../types'
import type { FieldType, FormRegistration } from '@/widgets/auth'

export const login = async (data: FieldType): Promise<LoginResponse> => {
    const formData = new FormData()
    formData.append('login', data.login)
    formData.append('password', data.password)

    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        body: formData
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