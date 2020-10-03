import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('should render the App component without crashing', () => {
    screen.debug();
  });

  test('should select the children that is being passed to the CustomInput component', () => {
    screen.getByText(/Input/);
  });

  test('should select the input element by its role', () => {
    screen.getByRole('textbox');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should select a label element by its text', () => {
    screen.getByLabelText('Input:');
  });

  test('should select input element by placeholder text', () => {
    screen.getByPlaceholderText('Example');
  });

  test('should not find the role "whatever" in our component', () => {
    expect(screen.queryByRole('whatever')).toBeNull();
  });
});
