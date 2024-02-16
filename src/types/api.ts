export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number // usually 599
  userName: string
  '.issued': string
  '.expires': string
}
