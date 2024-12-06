import React from 'react';
import { LogoutPage } from '../screens/logout/Loadable';
import { LoginPage } from '../screens/login/Loadable';
import { PageNotFound } from '../screens/pageNotFound/Loadable';
import { PageNotPermission } from '../screens/pageNotPermission/Loadable';
import { CustomRouteProps, createPublicRoutes } from './type';

const publicRoutes = createPublicRoutes({
  OAuth: {
    path: 'oauth2/authorization/oidc',
    children: <LoginPage />,
    title: 'Login Page',
  },
  Logout: {
    path: 'logout',
    children: <LogoutPage />,
    title: 'Logout Page',
  },
  NOT_FOUND: {
    path: '*',
    children: <PageNotFound />,
    title: 'Page Not Found',
  },
  NOT_PERMISSION: {
    path: 'not-permission',
    children: <PageNotPermission />,
    title: 'Not Permission',
  },
} as const);

type PublicRoutesKeys = keyof typeof publicRoutes;

export const PublicRoutes: Record<PublicRoutesKeys, CustomRouteProps> = publicRoutes;
