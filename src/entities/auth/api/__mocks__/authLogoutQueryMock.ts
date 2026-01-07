import { HttpResponse, http } from 'msw';

export const authLogoutQueryMock = () =>
    http.post('https://mock-api.local/logout', () => {
        return HttpResponse.text('', { status: 200 });
    });
