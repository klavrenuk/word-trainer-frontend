import { API_BASE_URL } from '@/shared/config/api'
import { fetchWithAuth } from '@/shared/api/fetchInstance'

import type { GameWord } from '@/features/words-study'

export const fetchGame = async (): Promise<GameWord> => {
  const res = await fetchWithAuth(`${API_BASE_URL}/api/words`)
  return res.json()
}
