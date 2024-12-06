import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from './ErrorBoundaryRoutes';
import { BusinessRoutes } from './BusinessRoutes';
import { PublicRoutes } from './PublicRoutes';
import PageLayout from '../components/PageLayout';

const MainRoutes = () => {
  return (
    <ErrorBoundaryRoutes>
      {/* business routes */}
      {Object.values(BusinessRoutes).map((route, index) => (
        <Route key={index} path={route.path} element={<PageLayout title={route.title}>{route.children}</PageLayout>} />
      ))}
      {/* public route */}
      {Object.values(PublicRoutes).map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <PageLayout title={route.title} noLayout>
              {route.children}
            </PageLayout>
          }
        />
      ))}
    </ErrorBoundaryRoutes>
  );
};

export default React.memo(MainRoutes);
