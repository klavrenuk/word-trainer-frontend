export const fetchWithAuth = async (url: string, options?: RequestInit) => {
  try {
    const res = await fetch(url, options)
    
    if (res.status === 401) {
//       localStorage.removeItem('token')
//       window.location.href = '/login'
      throw new Error('Unauthorized')
    }
    
    return res
  } catch (error) {
    if ((error as TypeError).message === 'Failed to fetch') {
//       localStorage.removeItem('token')
//       window.location.href = '/login'
    }
    throw error
  }
}