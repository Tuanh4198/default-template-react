import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'src/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders App', async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const element = await screen.findByTestId('App');
  expect(element).toBeInTheDocument();
});
