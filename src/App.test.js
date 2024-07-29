import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders label label', () => {
  render(<App />);
  const linkElement = screen.getByText(/label/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders dropdown with correct options', () => {
  render(<App />);

  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeInTheDocument();

  // Simulate a click event on the dropdown
  fireEvent.click(dropdown);

  const options = screen.getAllByRole('option');
  expect(options).toHaveLength(6);

  expect(options[0]).toHaveTextContent('Option 1');
  expect(options[1]).toHaveTextContent('Option with icon');
  expect(options[2]).toHaveTextContent('Long Long Option 3');
  expect(options[3]).toHaveTextContent('Long Long Long Option 4');
  expect(options[4]).toHaveTextContent('Long Long Long Long Option 5');
  expect(options[5]).toHaveTextContent('Long Long Long Long Long Option 6');
});

