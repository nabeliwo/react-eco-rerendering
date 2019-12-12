import { User } from '../redux/modules/user'

const users: User[] = [
  {
    id: 'user-1',
    avatar: '/assets/images/user_1.png',
    name: '手塚安則',
    nameYomi: 'テヅカヤスノリ',
    age: 10,
    attributes: [
      {
        id: 'attribute-1',
        name: 'ノーマル',
      },
    ],
  },
  {
    id: 'user-2',
    avatar: '/assets/images/user_2.png',
    name: '森川咲子',
    nameYomi: 'モリカワサキコ',
    age: 40,
    attributes: [
      {
        id: 'attribute-2',
        name: 'ほのお',
      },
      {
        id: 'attribute-11',
        name: 'エスパー',
      },
    ],
  },
  {
    id: 'user-3',
    avatar: '/assets/images/user_3.png',
    name: '岡崎護',
    nameYomi: 'オカザキマモル',
    age: 18,
    attributes: [
      {
        id: 'attribute-3',
        name: 'みず',
      },
      {
        id: 'attribute-12',
        name: 'むし',
      },
    ],
  },
  {
    id: 'user-4',
    avatar: '/assets/images/user_4.png',
    name: '前川真紀',
    nameYomi: 'マエカワマキ',
    age: 17,
    attributes: [
      {
        id: 'attribute-4',
        name: 'でんき',
      },
      {
        id: 'attribute-18',
        name: 'フェアリー',
      },
    ],
  },
  {
    id: 'user-5',
    avatar: '/assets/images/user_5.png',
    name: '竹下章一',
    nameYomi: 'タケシタショウイチ',
    age: 63,
    attributes: [
      {
        id: 'attribute-5',
        name: 'くさ',
      },
    ],
  },
  {
    id: 'user-6',
    avatar: '/assets/images/user_6.png',
    name: '吉村陽子',
    nameYomi: 'ヨシムラヨウコ',
    age: 22,
    attributes: [
      {
        id: 'attribute-6',
        name: 'こおり',
      },
      {
        id: 'attribute-13',
        name: 'いわ',
      },
    ],
  },
  {
    id: 'user-7',
    avatar: '/assets/images/user_7.png',
    name: '茂木一馬',
    nameYomi: 'モギカズマ',
    age: 38,
    attributes: [
      {
        id: 'attribute-7',
        name: 'かくとう',
      },
      {
        id: 'attribute-17',
        name: 'はがね',
      },
    ],
  },
  {
    id: 'user-8',
    avatar: '/assets/images/user_8.png',
    name: '神田優紀',
    nameYomi: 'カンダユキ',
    age: 5,
    attributes: [
      {
        id: 'attribute-8',
        name: 'どく',
      },
      {
        id: 'attribute-14',
        name: 'ゴースト',
      },
    ],
  },
  {
    id: 'user-9',
    avatar: '/assets/images/user_9.png',
    name: '黒木正宣',
    nameYomi: 'クロキマサノリ',
    age: 23,
    attributes: [
      {
        id: 'attribute-9',
        name: 'じめん',
      },
      {
        id: 'attribute-15',
        name: 'ドラゴン',
      },
    ],
  },
  {
    id: 'user-10',
    avatar: '/assets/images/user_10.png',
    name: '富永聡美',
    nameYomi: 'トミナガサトミ',
    age: 70,
    attributes: [
      {
        id: 'attribute-10',
        name: 'ひこう',
      },
      {
        id: 'attribute-16',
        name: 'あく',
      },
    ],
  },
]

export const getUsers = () => new Promise<User[]>(resolve => setTimeout(() => resolve(users), 2000))
