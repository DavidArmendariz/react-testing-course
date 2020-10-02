import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
    screen.debug();
  });
});
