import { all } from 'redux-saga/effects';
import { playerSaga } from './player/playerSaga';

export default function* rootSaga() {
  yield all([playerSaga()]);
}
