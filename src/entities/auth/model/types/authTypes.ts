export interface LoginForm {
    username: string;
    password: string;
}

export type RoleNames = 'guest' | 'admin';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    birthday: string | null;
    avatarUrl: string;
    createdAt: string;
    isEmailVerified: boolean;
    userRoles: Role[];
}

export interface Role {
    id: number;
    name: RoleNames;
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}

export type LoginBodyRequest = LoginForm;
export type LoginResponse = AuthResponse;
