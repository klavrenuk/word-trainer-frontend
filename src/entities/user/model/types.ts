export interface User {
  access_token: string;
  token_type: string;
  user_id: number;
  login: string;
  name: string;
}

export interface UserProfile {
  name: string;
  id: string;
}
