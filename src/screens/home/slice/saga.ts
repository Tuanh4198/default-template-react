import { call, put, takeLatest, all } from 'redux-saga/effects';
import { homePageActions } from '.';
import { fetchCounterApi } from '../apis';

// Worker saga: fetch counter
export function* fetchCounterSaga(action: ReturnType<typeof homePageActions.fetchCounterStarted>) {
  try {
    const res: number = yield call(fetchCounterApi, action.payload);

    yield put(homePageActions.fetchCounterSuccess(res));
  } catch (error: any) {
    yield put(homePageActions.fetchCounterFailed(error));
  }
}

// Watcher saga:
export function* watchFetchCounterStarted() {
  yield takeLatest(homePageActions.fetchCounterStarted.type, fetchCounterSaga);
}

// Start the other saga simultaneously in the array
export function* homePageSaga() {
  yield all([watchFetchCounterStarted()]);
}
