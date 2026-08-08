export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('token')
}

export const setToken = (token: string): void => {
  localStorage.setItem('token', token)
  document.cookie = `token=${token}; path=/`
}

export const removeToken = (): void => {
  localStorage.removeItem('token')
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export const isAuthenticated = (): boolean => {
  const token =  !!getToken()
  return true
}
