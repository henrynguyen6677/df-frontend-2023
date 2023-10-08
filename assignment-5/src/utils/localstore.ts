import { BOOKS, MODE } from '../contants/storage'
import { JSONStringToObject } from './parse.helper'

export const LocalStorage = () => {
  if (typeof window === 'undefined') return new Storage()
  return window.localStorage
}

export const getBooksFromLocalStorage = () => {
  if (typeof window === 'undefined') return []
  return JSONStringToObject(LocalStorage().getItem(BOOKS))
}

export const setBooksToLocalStorage = (books) => {
  if (typeof window === 'undefined') return
  LocalStorage().setItem(BOOKS, JSON.stringify(books))
}

export const setModeToLocalStorage = (mode) => {
  if (typeof window === 'undefined') return
  LocalStorage().setItem(MODE, mode)
}

export const getModeFromLocalStorage = (): string => {
  if (typeof window === 'undefined') return ''
  return LocalStorage().getItem(MODE) as string
}
