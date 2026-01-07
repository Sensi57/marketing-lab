import { http, HttpResponse } from 'msw';
import { LoginBodyRequest, LoginResponse } from '../../model/types/authTypes';
import { authMockResponse } from './data/authMockResponse';
import { allowedNodeEnvironmentFlags } from 'process';

const userCredentionals = {
    username: 'alisa@mail.ru',
    password: 'password123',
};

export const authLoginMutationMock = () =>
    http.post<LoginBodyRequest, LoginResponse>(
        'https://mock-api.local/login',
        async ({ request }) => {
            const { username, password } = (await request.json()) as any;

            if (
                username === userCredentionals.username &&
                userCredentionals.password === password
            ) {
                return HttpResponse.json(authMockResponse);
            }

            return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        },
    );
