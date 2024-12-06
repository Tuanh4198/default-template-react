/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { configEnv } from '../config/configEnv';
import { Translate } from '../locales/Translate';

interface IErrorBoundaryProps {
  readonly children: React.ReactNode;
}

interface IErrorBoundaryState {
  readonly error: any;
  readonly errorInfo: any;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  readonly state: IErrorBoundaryState = { error: undefined, errorInfo: undefined };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      const errorDetails =
        configEnv.ENV === 'DEV' ? (
          <details className='preserve-space'>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        ) : undefined;

      return (
        <div>
          <h2 className='error'>
            <Translate contentKey='An unexpected error has occurred.' />
          </h2>
          {errorDetails}
        </div>
      );
    }

    return this.props.children;
  }
}

export default React.memo(ErrorBoundary);
