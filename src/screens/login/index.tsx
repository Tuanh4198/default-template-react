import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { LocalStorageKey, localStorageSetItem } from '../../config/localStorage';

export const LoginRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    localStorageSetItem(LocalStorageKey.REDIRECT_URL, `${(location.state as any).from.pathname}${location.search}`);
    window.location.reload();
  });

  return null;
};
