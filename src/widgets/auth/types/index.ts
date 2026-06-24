import type { User } from '@/entities'

export interface LoginData {
    login: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
    user: User;
    error?: string;
}

export interface RegisterData {
    username: string;
    password: string;
    name: string;
}

export type FieldType = {
  login?: string;
  password?: string;
};

export type FormRegistration = {
  login: string;
  name: string;
  password: string;
}