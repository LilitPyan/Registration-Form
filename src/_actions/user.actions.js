export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export function signUp(user) {
  return { type: SIGN_UP, payload: { user } };
}

export function logIn(email, password) {
  return { type: LOG_IN, payload: { email, password } };
}

export function logOut(email, password) {
  return { type: LOG_OUT, payload: { email, password } };
}
