/**
 * Payloads
 */
export interface PasswordPayload {
  username: string,
  password: string,
  captcha?: string,
  grant_type: GrantTypesEnum,
  client_id: string,
  client_secret: string
}

export interface ClientCredentialsPayload {
  grant_type: GrantTypesEnum,
  client_id: string,
  client_secret: string
}

/**
 * Response
 */
export interface AuthenticationResponse {
  token_type?: string,
  expires_in: number,
  access_token: string,
  refresh_token?: string
}

/**
 * Enums
 */
export enum GrantTypesEnum {
  PASSWORD = 'password',
  CLIENT_CREDENTIALS = 'client_credentials',
  REFRESH_TOKEN = 'refresh_token'
}

/**
 * Consts
 */

export const AuthenticationConstant = {
  AUTH_TOKEN: 'token',
  AUTH_TOKEN_HASH: 'token_hash',
  AUTH_REFRESH_TOKEN: 'refresh_token',
  EXPIRES_IN: 'expires_in',
};
