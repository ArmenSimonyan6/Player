import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TPlayerState, TPlayerSliceTrack } from './types';

const initialState: TPlayerState = {
  playlist: [],
  isPlaying: false,
  currentTrack: null,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<TPlayerSliceTrack[]>) => {
      state.playlist = action.payload;
    },
    playTrack: (state, action: PayloadAction<TPlayerSliceTrack>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },

    pauseTrack: state => {
      state.isPlaying = false;
    },
  },
});

export const { setPlaylist, playTrack, pauseTrack } = playerSlice.actions;

export default playerSlice.reducer;
