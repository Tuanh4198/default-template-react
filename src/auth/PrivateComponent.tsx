import React, { Fragment } from 'react';
import { hasAnyAuthority } from './util';
import ErrorBoundary from '../routes/ErrorBoundary';

interface IOwnProps {
  hasAnyAuthorities?: string[];
  withCustomCondition?: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const PrivateComponent = ({ children, fallback, hasAnyAuthorities = [], withCustomCondition = true }: IOwnProps) => {
  // current permission
  const currentAuthorities: string[] = [];

  const isAuthorized = hasAnyAuthority(currentAuthorities, hasAnyAuthorities);

  if (isAuthorized && withCustomCondition) {
    return <Fragment>{children}</Fragment>;
  }

  return fallback;
};

export default PrivateComponent;
