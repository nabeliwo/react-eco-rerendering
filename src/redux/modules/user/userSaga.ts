import { call, fork, put, take } from '@redux-saga/core/effects'

import { getUsers, getUser } from '../../../api/user'
import { path } from '../../../constants/application'
import { SUMIT_EDIT_USER_FORM, SubmitEditUserFormAction } from '../editUserForm'
import { navigateTo } from '../router'
import { User } from './userDomain'
import { FETCH_USERS, fetchUsersDone, FETCH_USER, FetchUserAction, fetchUserDone, updateCurrentUser } from './userAction'

export function* handleFetchUsers(fetchApi: typeof getUsers) {
  while (true) {
    yield take(FETCH_USERS)

    const res: User[] = yield call(fetchApi)
    yield put(fetchUsersDone(res))
  }
}

export function* handleFetchUser(fetchApi: typeof getUser) {
  while (true) {
    const action: FetchUserAction = yield take(FETCH_USER)

    const res: User = yield call(fetchApi, action.payload.id)
    yield put(fetchUserDone(res))
  }
}

export function* handleSubmitEditUserForm() {
  while (true) {
    const action: SubmitEditUserFormAction = yield take(SUMIT_EDIT_USER_FORM)
    const { id, userForm } = action.payload

    yield put(updateCurrentUser(id, userForm))
    yield put(navigateTo(path.user(id)))
  }
}

export function* userProcess() {
  yield fork(handleFetchUsers, getUsers)
  yield fork(handleFetchUser, getUser)
  yield fork(handleSubmitEditUserForm)
}
