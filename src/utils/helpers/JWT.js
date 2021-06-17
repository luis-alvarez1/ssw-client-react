import { JWT_TOKEN_KEY } from '../../core/constants';
import { getItem } from './LocalStorage';

export function parseJwt(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url
    .replace('-', '+')
    .replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export function getUserFromLocalStorage() {
  const token = getItem(JWT_TOKEN_KEY);
  return parseJwt(token);
}
