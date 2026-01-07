import { authLoginMutationMock } from './authLoginMutation';
import { authLogoutQueryMock } from './authLogoutQueryMock';

export const authHandlers = [authLoginMutationMock(), authLogoutQueryMock()];
