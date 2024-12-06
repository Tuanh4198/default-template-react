import { PayloadAction } from '@reduxjs/toolkit';
import { AppState, appReducerName } from './types';
import { createSlice } from 'src/store/reduxToolkit';
import { LanguageCode, defaultLanguage } from '../../locales/type';

export const initialState: AppState = {
  language: defaultLanguage,
};

const slice = createSlice({
  name: appReducerName,
  initialState,
  reducers: {
    // change language
    changeLanguage(state, action: PayloadAction<LanguageCode>) {
      state.language = action.payload;
    },
  },
});

export const { actions: AppActions, name, reducer } = slice;

export default slice.reducer;
