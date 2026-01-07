import { AuthResponse, RoleNames } from '@/entities/auth/model/types/authTypes';

const userMock = {
    id: '2f4b8c7d-e29b-44f2-931e-45c9fbbf3b2d',
    firstName: 'Арман',
    lastName: 'Ермеков',
    phone: '+77012345678',
    address: 'пр. Абая 100, кв. 25, Алматы, Казахстан',
    birthday: '1995-05-15T00:00:00.000Z',
    avatarUrl: 'https://cdn.fastcup.net/logos/teams/20989_7n1la213o.png',
    createdAt: '2024-03-18T12:00:00.000Z',
    isEmailVerified: true,
    userRoles: [{ id: 4, name: 'guest' as RoleNames }],
};

export const authMockResponse: AuthResponse = {
    accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFybWFuQGV4YW1wbGUuY29tIiwic3ViIjoiMmY0YjhjN2QtZTI5Yi00NGYyLTkzMWUtNDVjOWZiYmYzYjJkIiwiaWF0IjoxNzI1ODU0ODY0LCJleHAiOjE3MjU5NDEyNjR9.A2lFvGJ2m1Q1n0yZbX3OJlR2wG8p1M0eQx5QJ3lFk8M',
    user: userMock,
};
