import { authService } from '../services/auth';

export const authHeader = function authHeader() {
    // return authorization header with jwt token
    const currentUser = authService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `${currentUser.token}` };
    } else {
        return {};
    }
}