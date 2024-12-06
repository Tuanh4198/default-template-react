import React from 'react';
import { Translate } from '../../locales/Translate';

export const NotPermission = () => {
  return (
    <div>
      <Translate contentKey='You do not have permission to view this page.' />
    </div>
  );
};
