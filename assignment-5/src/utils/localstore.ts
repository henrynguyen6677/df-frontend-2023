import { BOOKS, MODE } from '../contants/storage'
import { JSONStringToObject } from './parse.helper'
import { IBook } from '../interfaces/book.interface'

export const LocalStorage = () => {
  if (typeof window === 'undefined') return new Storage()
  return window.localStorage
}

export const getBooksFromLocalStorage = () => {
  if (typeof window === 'undefined') return <IBook[]>[]
  const booksStr = LocalStorage().getItem(BOOKS)
  if (!booksStr) return <IBook[]>[]
  return <IBook[]>JSONStringToObject(booksStr)
}

export const setBooksToLocalStorage = (books: IBook[]) => {
  if (typeof window === 'undefined') return
  LocalStorage().setItem(BOOKS, JSON.stringify(books))
}

export const setModeToLocalStorage = (mode: string) => {
  if (typeof window === 'undefined') return
  LocalStorage().setItem(MODE, mode)
}

export const getModeFromLocalStorage = (): string => {
  if (typeof window === 'undefined') return ''
  return LocalStorage().getItem(MODE) as string
}
