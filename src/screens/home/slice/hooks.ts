import * as slice from '.';
import { homePageSaga } from './saga';
import { useInjectReducer, useInjectSaga } from '../../../store/reduxInjectors';

export const useHomeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homePageSaga });

  return { actions: slice.homePageActions };
};
