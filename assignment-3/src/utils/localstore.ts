import { BOOKS, MODE } from '../contants/storage';
import { JSONStringToObject } from './parse.helper';

export const LocalStorage = window.localStorage;

export const getBooksFromLocalStorage = () => {
  return JSONStringToObject(LocalStorage.getItem(BOOKS));
};

export const setBooksToLocalStorage = (books) => {
  LocalStorage.setItem(BOOKS, JSON.stringify(books));
};

export const getModeFromLocalStorage = (): string => {
  return LocalStorage.getItem(MODE) as string;
};

export const setModeToLocalStorage = (mode) => {
  LocalStorage.setItem(MODE, mode);
};
