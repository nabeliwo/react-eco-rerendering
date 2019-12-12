import { User, attributes, changeUsersOrder } from './userDomain'
import { UserActionTypes, FETCH_USERS_DONE, SET_CURRENT_USER, UPDATE_CURRENT_USER, CHANGE_ORDER } from './userAction'

export type UserState = {
  list: {
    order: string
    items: User[]
  }
  current: User | null
}

const initialState: UserState = {
  list: {
    order: 'name_asc',
    items: [],
  },
  current: null,
}

// eslint-disable-next-line default-param-last
export const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_DONE:
      return {
        ...state,
        list: {
          ...state.list,
          items: changeUsersOrder(action.payload.users, state.list.order),
        },
      }

    case SET_CURRENT_USER: {
      const { id } = action.payload
      const user = state.list.items.find(item => item.id === id)!

      return {
        ...state,
        current: user,
      }
    }

    case UPDATE_CURRENT_USER: {
      const { id, userForm } = action.payload
      const newAttributes: Array<{ id: string; name: string }> = []

      Array.from(userForm.attributes.keys()).forEach(attributeId => {
        const attribute = attributes.find(item => item.id === attributeId)
        if (attribute) newAttributes.push(attribute)
      })

      const newCurrentUser = {
        ...state.current!,
        name: userForm.name,
        nameYomi: userForm.nameYomi,
        age: parseInt(userForm.age, 10),
        attributes: newAttributes,
      }

      return {
        list: {
          ...state.list,
          items: changeUsersOrder(
            state.list.items.map(item => {
              if (item.id === id) return newCurrentUser
              return item
            }),
            state.list.order,
          ),
        },
        current: newCurrentUser,
      }
    }

    case CHANGE_ORDER:
      return {
        ...state,
        list: {
          items: changeUsersOrder(state.list.items, action.payload.order),
          order: action.payload.order,
        },
      }

    default:
      return state
  }
}
