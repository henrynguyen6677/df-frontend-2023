import { IBook } from '../interfaces/book.interface'

const WrapperToLowercase = (text: string) => {
  return text.toLowerCase()
}

export const SearchHelper = (books: IBook[], filter: string) => {
  return books
    ?.filter(
      (item) =>
        WrapperToLowercase(item.name).includes(WrapperToLowercase(filter)) ||
        WrapperToLowercase(item.author).includes(WrapperToLowercase(filter)) ||
        WrapperToLowercase(item.author).includes(WrapperToLowercase(filter)),
    )
    .map((item) => item)
}
