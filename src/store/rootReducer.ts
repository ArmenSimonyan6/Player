import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './player/playerSlice';

export const rootReducer = combineReducers({
  player: playerReducer,
});
