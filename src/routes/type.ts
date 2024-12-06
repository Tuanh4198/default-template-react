import { ReactNode } from 'react';

export interface CustomRouteProps {
  path?: string;
  children: ReactNode;
  title: string;
}

export const createPublicRoutes = <T extends Record<string, CustomRouteProps>>(routes: T): T => {
  return routes;
};
