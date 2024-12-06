import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from 'src/app/appSlice/selectors';
import { AppActions } from 'src/app/appSlice';

export interface IDataLang {
  image?: string;
  lang: string;
  country: string;
  value: LanguageCode;
}

export const useChangeLanguage = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = useCallback(
    (language: LanguageCode) => {
      i18n.changeLanguage(language);
      dispatch(AppActions.changeLanguage(language));
    },
    [dispatch, i18n]
  );

  const dataLang: IDataLang[] = [
    {
      lang: 'Tiếng Việt',
      country: 'VietNam',
      value: LanguageCode.vi,
    },
    {
      lang: 'English',
      country: 'England',
      value: LanguageCode.en,
    },
  ];

  return { changeLanguage, dataLang };
};
