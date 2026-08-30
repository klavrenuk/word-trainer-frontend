import { API_BASE_URL } from '@/shared/config/api'
import { fetchWithAuth } from '@/shared/api/fetchInstance'

import type { UserStatistics } from '@/types/statistics'

export const fetchUserStatistics = async (): Promise<UserStatistics> => {
  const res = await fetchWithAuth(`${API_BASE_URL}/api/statistics`, {})
  return res.json()
}
