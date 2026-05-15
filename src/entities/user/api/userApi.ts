import type { User } from '@/entities'

import { API_BASE_URL } from '@/shared/config/api'

export const fetchProfile = async():Promise<User> => {
    const res = await fetch(`${API_BASE_URL}/api/profile`)
    return res.json()
}