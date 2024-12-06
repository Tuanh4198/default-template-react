import { applyMiddleware, configureStore, StoreEnhancer, combineReducers } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { InjectedReducersType } from 'src/store/injectorTypings';
import appReducer from 'src/app/appSlice';
import { appReducerName } from 'src/app/appSlice/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [appReducerName],
};

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const { run: runSaga } = sagaMiddleware;

  const createReducer = (injectedReducers: InjectedReducersType = {}) => {
    const rootReducer = combineReducers({
      ...injectedReducers,
      app: appReducer,
    });

    return persistReducer(persistConfig, rootReducer);
  };

  const enhancers = [
    applyMiddleware(sagaMiddleware),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(enhancers),
  });

  return store;
};
