import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders the root page load to render the home page', () => {
  render(<App />);
  expect(screen.getByText('Home page')).toBeInTheDocument();
});