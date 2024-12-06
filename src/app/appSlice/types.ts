import { LanguageCode } from '../../locales/type';

export const appReducerName = 'app';

export interface AppState {
  language: LanguageCode;
  isAuthenticated?: boolean;
  account?: any;
  redirectMessage?: string;
  sessionHasBeenFetched?: boolean;
  logoutUrl?: string;
}
