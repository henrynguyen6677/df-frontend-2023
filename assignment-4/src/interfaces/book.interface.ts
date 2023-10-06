export interface IBooks {
  length: number
  header: string[]
  data: IBook[]
}

export interface IBook {
  id: number
  name: string
  author: string
  topic: string
}

export interface IDeleteBook {
  id: number
  name: string
}
