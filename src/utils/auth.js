import Cookies from 'js-cookie'

const TokenKey = 'architecture_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken() {
  return Cookies.set(TokenKey)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}