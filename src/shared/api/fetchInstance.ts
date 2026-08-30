export const fetchWithAuth = async (url: string, params?: Record<string, any>, options?: RequestInit) => {
  const query = new URLSearchParams({ user_id: '2', ...params });
  const finalUrl = `${url}?${query.toString()}`;

  const res = await fetch(finalUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (res.status === 401) throw new Error('Unauthorized');
  return res;
};
