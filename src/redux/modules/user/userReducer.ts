import { User, attributes } from './userDomain'
import { UserActionTypes, FETCH_USERS_DONE, FETCH_USER_DONE, UPDATE_CURRENT_USER } from './userAction'

export type UserState = {
  list: User[]
  current: User | null
}

const initialState: UserState = {
  list: [],
  current: null,
}

// eslint-disable-next-line default-param-last
export const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USERS_DONE:
      return {
        ...state,
        list: action.payload.users,
      }

    case FETCH_USER_DONE:
      return {
        ...state,
        current: action.payload.user,
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
        list: state.list.map(item => {
          if (item.id === id) return newCurrentUser
          return item
        }),
        current: newCurrentUser,
      }
    }

    default:
      return state
  }
}
