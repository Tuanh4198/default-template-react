import React from 'react';
import MainRoutes from 'src/routes';

function App() {
  return (
    <div data-testid='App'>
      <MainRoutes />
    </div>
  );
}

export default React.memo(App);
