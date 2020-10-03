import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
    screen.debug();
  });

  test('should select the children that is being passed to the CustomInput component', () => {
    render(<App />);
    screen.getByText(/Input/);
  });
});
