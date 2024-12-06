import React from 'react';
import { useTranslation } from 'react-i18next';
import { defaultNamespace } from './type';

interface TranslateProps {
  ns?: string;
  contentKey: string;
  variables?: { [key: string]: string };
}
export const Translate = ({ ns = defaultNamespace, contentKey, variables }: TranslateProps) => {
  const { t } = useTranslation(ns);

  return <>{t(contentKey, variables)}</>;
};
