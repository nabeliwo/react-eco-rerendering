import { call, fork, put, take } from '@redux-saga/core/effects'

import { getUsers } from '../../../api/user'
import { changeViewMode } from '../view'
import { SUMIT_EDIT_USER_FORM, SubmitEditUserFormAction } from '../editUserForm'
import { User } from './userDomain'
import { FETCH_USERS, fetchUsersDone, updateCurrentUser } from './userAction'

export function* handleFetchUsers(fetchApi: typeof getUsers) {
  while (true) {
    yield take(FETCH_USERS)

    const res: User[] = yield call(fetchApi)
    yield put(fetchUsersDone(res))
  }
}

export function* handleSubmitEditUserForm() {
  while (true) {
    const action: SubmitEditUserFormAction = yield take(SUMIT_EDIT_USER_FORM)
    const { id, userForm } = action.payload

    yield put(updateCurrentUser(id, userForm))
    yield put(changeViewMode('show'))
  }
}

export function* userProcess() {
  yield fork(handleFetchUsers, getUsers)
  yield fork(handleSubmitEditUserForm)
}
