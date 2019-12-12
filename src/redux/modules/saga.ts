import { all } from 'redux-saga/effects'

import { userProcess } from './user'

export function* rootSaga() {
  yield all([userProcess()])
}
