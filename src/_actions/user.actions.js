export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

export function signUp(user) {
  return { type: SIGN_UP, payload: { user } };
}

export function logIn(email, password) {
  return { type: LOG_IN, payload: { email, password } };
}
