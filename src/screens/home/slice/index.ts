import { PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from './types';
import { createSlice } from '../../../store/reduxToolkit';
import { Screens } from '../..';

export const initialState: HomeState = {
  fetchingCounter: false,
  counter: 0,
};

const slice = createSlice({
  name: Screens.HOME,
  initialState,
  reducers: {
    // fetch counter reducer
    fetchCounterStarted(state, action: PayloadAction<number>) {
      state.fetchingCounter = true;
      state.error = undefined;
    },
    fetchCounterSuccess(state, action: PayloadAction<number>) {
      state.fetchingCounter = false;
      state.counter = action.payload;
    },
    fetchCounterFailed(state, action: PayloadAction<HomeState['error']>) {
      state.fetchingCounter = false;
      state.error = action.payload;
    },
    // set counter state
    increase(state, action: PayloadAction) {
      state.counter += 1;
    },
    decrease(state, action: PayloadAction) {
      state.counter -= 1;
    },
  },
});

export const { actions: homePageActions, name, reducer } = slice;
