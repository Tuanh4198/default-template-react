import { Screens } from '../screens';
import { AppState, appReducerName } from 'src/app/appSlice/types';
import { HomeState } from '../screens/home/slice/types';

export interface RootState {
  [appReducerName]?: AppState;
  [Screens.HOME]?: HomeState;
}
