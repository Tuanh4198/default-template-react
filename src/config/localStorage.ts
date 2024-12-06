export enum LocalStorageKey {
  REDIRECT_URL = 'REDIRECT_URL',
}

export const localStorageSetItem = (key: LocalStorageKey, value: string) => {
  localStorage.setItem(key, value);
};

export const localStorageGetItem = (key: LocalStorageKey) => {
  const value = localStorage.getItem(key);

  return value;
};

export const localStorageRemoveItem = (key: LocalStorageKey) => {
  localStorage.removeItem(key);
};

export const localStorageClear = () => {
  localStorage.clear();
};
