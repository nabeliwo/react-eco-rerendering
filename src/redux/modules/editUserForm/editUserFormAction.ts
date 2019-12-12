import { User } from '../user'
import { EditUserForm } from './editUserFormDomain'

export const SET_USER_FORM = 'SET_USER_FORM'
export const UPDATE_TEXT = 'UPDATE_TEXT'
export const TOGGLE_ATTRIBUTE = 'TOGGLE_ATTRIBUTE'
export const SUMIT_EDIT_USER_FORM = 'SUMIT_EDIT_USER_FORM'

export type SetUserFormAction = {
  type: typeof SET_USER_FORM
  payload: { user: User }
}
export type UpdateTextAction = {
  type: typeof UPDATE_TEXT
  payload: {
    key: 'name' | 'nameYomi' | 'age'
    value: string
  }
}
export type ToggleAttributeAction = {
  type: typeof TOGGLE_ATTRIBUTE
  payload: {
    id: string
    checked: boolean
  }
}
export type SubmitEditUserFormAction = {
  type: typeof SUMIT_EDIT_USER_FORM
  payload: {
    id: string
    userForm: EditUserForm
  }
}

export function setUserForm(user: User): SetUserFormAction {
  return {
    type: SET_USER_FORM,
    payload: { user },
  }
}
export function updateText(key: 'name' | 'nameYomi' | 'age', value: string): UpdateTextAction {
  return {
    type: UPDATE_TEXT,
    payload: { key, value },
  }
}
export function toggleAttribute(id: string, checked: boolean): ToggleAttributeAction {
  return {
    type: TOGGLE_ATTRIBUTE,
    payload: { id, checked },
  }
}
export function submitEditUserForm(id: string, userForm: EditUserForm): SubmitEditUserFormAction {
  return {
    type: SUMIT_EDIT_USER_FORM,
    payload: { id, userForm },
  }
}

export type EditUserFormActionTypes = SetUserFormAction | UpdateTextAction | ToggleAttributeAction | SubmitEditUserFormAction
