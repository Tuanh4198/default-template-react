import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { RootState } from '../../../store/rootState';

const selectSlice = (state: RootState) => state.home || initialState;

export const selectCounter = createSelector([selectSlice], (slice) => slice.counter);
