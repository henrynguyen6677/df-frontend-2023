import { BOOKS, MODE } from '../contants/storage';
import { JSONStringToObject } from './parse.helper';

export const LocalStorage = window.localStorage;

export const GetBooksFromLocalStorage = () => {
  return JSONStringToObject(LocalStorage.getItem(BOOKS));
};

export const SetBooksToLocalStorage = (books) => {
  LocalStorage.setItem(BOOKS, JSON.stringify(books));
};

export const GetModeFromLocalStorage = (): string => {
  return LocalStorage.getItem(MODE) as string;
};

export const SetModeToLocalStorage = (mode) => {
  LocalStorage.setItem(MODE, mode);
};
