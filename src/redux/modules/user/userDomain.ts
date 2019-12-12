type UserAttribute = {
  id: string
  name: string
}

export type User = {
  id: string
  avatar: string
  name: string
  nameYomi: string
  age: number
  attributes: UserAttribute[]
}

export const changeUsersOrder = (users: User[], order: string) => {
  if (order === 'name_asc') {
    return users.sort((a, b) => {
      if (a.nameYomi < b.nameYomi) return -1
      if (a.nameYomi > b.nameYomi) return 1
      return 0
    })
  } else if (order === 'name_desc') {
    return users.sort((a, b) => {
      if (a.nameYomi < b.nameYomi) return 1
      if (a.nameYomi > b.nameYomi) return -1
      return 0
    })
  } else if (order === 'age_asc') {
    return users.sort((a, b) => {
      return a.age - b.age
    })
  } else if (order === 'age_desc') {
    return users.sort((a, b) => {
      return b.age - a.age
    })
  }

  return users
}

export const attributes = [
  {
    id: 'attribute-1',
    name: 'ノーマル',
  },
  {
    id: 'attribute-2',
    name: 'ほのお',
  },
  {
    id: 'attribute-3',
    name: 'みず',
  },
  {
    id: 'attribute-4',
    name: 'でんき',
  },
  {
    id: 'attribute-5',
    name: 'くさ',
  },
  {
    id: 'attribute-6',
    name: 'こおり',
  },
  {
    id: 'attribute-7',
    name: 'かくとう',
  },
  {
    id: 'attribute-8',
    name: 'どく',
  },
  {
    id: 'attribute-9',
    name: 'じめん',
  },
  {
    id: 'attribute-10',
    name: 'ひこう',
  },
  {
    id: 'attribute-11',
    name: 'エスパー',
  },
  {
    id: 'attribute-12',
    name: 'むし',
  },
  {
    id: 'attribute-13',
    name: 'いわ',
  },
  {
    id: 'attribute-14',
    name: 'ゴースト',
  },
  {
    id: 'attribute-15',
    name: 'ドラゴン',
  },
  {
    id: 'attribute-16',
    name: 'あく',
  },
  {
    id: 'attribute-17',
    name: 'はがね',
  },
  {
    id: 'attribute-18',
    name: 'フェアリー',
  },
]
