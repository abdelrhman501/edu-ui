import { LOCALE_STORAGE_USER, LOCALE_STORAGE_TOKEN } from '../common/const'

export const isBrowser = typeof window !== 'undefined'

export const LANG_KEY = 'siteLang'
export const USER_DATA_KEY = 'userData'
export const TOKEN_KEY = 'token'

export const getLocalStorage = key => {
  if (!isBrowser) return null
  return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
  if (!isBrowser) return
  localStorage.setItem(key, value)
}

export const clearLocalStorage = key => {
  if (!isBrowser) return
  localStorage.removeItem(key)
}

/**
 * Helper function to get user from locale storage if exists
 */
export const getUserFromLocaleStorageIfAny = () => {
  const user = getLocalStorage(LOCALE_STORAGE_USER)
  return user ? JSON.parse(user) : {}
}

/**
 * Helper function to get jwt from locale storage if exists
 */
export const getTokenFromLocaleStorageIfAny = () => {
  return getLocalStorage(LOCALE_STORAGE_TOKEN) || ''
}
