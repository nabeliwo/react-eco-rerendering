type UserAttribute = {
  id: string
  name: string
}

export type User = {
  id: string
  avatar: string
  name: string
  age: number
  attributes: UserAttribute[]
}
