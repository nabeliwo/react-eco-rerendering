import { EditUserFormActionTypes, SET_USER_FORM, UPDATE_TEXT, TOGGLE_ATTRIBUTE } from './editUserFormAction'
import { EditUserForm } from './editUserFormDomain'

export type EditUserFormState = EditUserForm

const initialState: EditUserFormState = {
  name: '',
  nameYomi: '',
  age: '',
  attributes: new Map(),
}

export const editUserFormReducer = (
  // eslint-disable-next-line default-param-last
  state: EditUserFormState = initialState,
  action: EditUserFormActionTypes,
): EditUserFormState => {
  switch (action.type) {
    case SET_USER_FORM: {
      const { user } = action.payload
      const attributeMap = new Map(user.attributes.map(({ id }) => [id, id]))

      return {
        name: user.name,
        nameYomi: user.nameYomi,
        age: `${user.age}`,
        attributes: attributeMap,
      }
    }

    case UPDATE_TEXT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }

    case TOGGLE_ATTRIBUTE: {
      const { id, checked } = action.payload
      const newAttributes = new Map(state.attributes)

      if (checked) {
        newAttributes.set(id, id)
      } else {
        newAttributes.delete(id)
      }

      return {
        ...state,
        attributes: newAttributes,
      }
    }

    default:
      return state
  }
}
