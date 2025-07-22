import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PlayerState, Track } from './types';

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<Track[]>) => {
      state.playlist = action.payload;
    },
    playTrack: (state, action: PayloadAction<Track>) => {
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
