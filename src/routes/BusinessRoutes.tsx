import React from 'react';
import { HomePage } from '../screens/home/Loadable';
import { CustomRouteProps, createPublicRoutes } from './type';

// business routes
const businessRoutes = createPublicRoutes({
  Home: {
    path: '/',
    children: <HomePage />,
    title: 'Home Page',
  },
} as const);

type BusinessRouteKeys = keyof typeof businessRoutes;

export const BusinessRoutes: Record<BusinessRouteKeys, CustomRouteProps> = businessRoutes;
