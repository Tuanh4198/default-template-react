import React, { Fragment } from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { hasAnyAuthority } from './util';
import { PublicRoutes } from '../routes/PublicRoutes';

interface IOwnProps {
  hasAnyAuthorities?: string[];
  children: React.ReactNode;
}

export const PrivateRoute = ({ children, hasAnyAuthorities = [], ...rest }: IOwnProps & RouteProps) => {
  // current permission
  const currentAuthorities: string[] = [];

  const isAuthorized = hasAnyAuthority(currentAuthorities, hasAnyAuthorities);
  const location = useLocation();

  if (!children) {
    throw new Error(`A component needs to be specified for private route for path ${(rest as any).path}`);
  }

  // login success
  if (true) {
    if (isAuthorized) {
      return <Fragment>{children}</Fragment>;
    }

    return (
      <Navigate
        to={{
          pathname: PublicRoutes.NOT_PERMISSION.path,
          search: location.search,
        }}
        replace
        state={{ from: location }}
      />
    );
  }

  // redirect to login screen
  return (
    <Navigate
      to={{
        pathname: PublicRoutes.OAuth.path,
        search: location.search,
      }}
      replace
      state={{ from: location }}
    />
  );
};

export default PrivateRoute;
