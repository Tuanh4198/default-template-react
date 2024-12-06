import { LanguageCode, defaultNamespace } from './type';
import { Screens } from '../screens';

// file translate VietNamese
import vi from './translations/vi.json';
import viHome from '../screens/home/translations/vi.json';

// file translate English
import en from './translations/en.json';
import enHome from '../screens/home/translations/en.json';

export const resources = {
  [LanguageCode.en]: {
    [defaultNamespace]: en,
    [Screens.HOME]: enHome,
  },
  [LanguageCode.vi]: {
    [defaultNamespace]: vi,
    [Screens.HOME]: viHome,
  },
};
