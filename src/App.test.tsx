import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getUser } from './get-user';
import { mocked } from 'ts-jest/utils';

jest.mock('./get-user');
const mockGetUser = mocked(getUser, true);

describe('When everything is OK', () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
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

describe('When the component fetches the user successfully', () => {
  beforeEach(() => {
    mockGetUser.mockClear();
  });

  test('should call getUser once', async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  });
});
