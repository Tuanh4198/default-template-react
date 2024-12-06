import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { RootState } from 'src/store/rootState';
import { appReducerName } from './types';

const selectSlice = (state: RootState) => state[appReducerName] || initialState;

export const selectLanguage = createSelector([selectSlice], (slice) => slice.language);
