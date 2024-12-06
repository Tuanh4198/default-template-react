import React, { useLayoutEffect } from 'react';
import { Translate } from '../../locales/Translate';

export const Logout = () => {
  useLayoutEffect(() => {
    // dispatch(logout());
    // if (logoutUrl) {
    //   window.location.href = logoutUrl;
    // }
  });

  return (
    <div className='p-5'>
      <h4>
        <Translate contentKey='Logged out successfully!' />
      </h4>
    </div>
  );
};
