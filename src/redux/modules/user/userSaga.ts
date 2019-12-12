import { call, fork, put, take } from '@redux-saga/core/effects'

import { getUsers, getUser } from '../../../api/user'
import { User } from './userDomain'
import { FETCH_USERS, fetchUsersDone, FETCH_USER, FetchUserAction, fetchUserDone } from './userAction'

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

export function* userProcess() {
  yield fork(handleFetchUsers, getUsers)
  yield fork(handleFetchUser, getUser)
}
