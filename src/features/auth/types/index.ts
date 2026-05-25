import type { User } from '@/entities'

export interface LoginData {
    login: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface RegisterData {
    login: string;
    password: string;
    name: string;
}