import { takeEvery, delay } from 'redux-saga/effects';

function* autoNextTrack() {
  yield delay(5000);
}

export function* playerSaga() {
  yield takeEvery('player/playTrack', autoNextTrack);
}
