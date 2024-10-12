// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // Ensures we can use toBeInTheDocument

test('renders App component with basic content', () => {
  render(<App />);
  
  // Check if the Header and Footer are rendered by looking for some known text
  expect(screen.getByText(/home/i)).toBeInTheDocument(); // Adjust if necessary
  expect(screen.getByText(/footer/i)).toBeInTheDocument(); // Adjust if necessary
});
