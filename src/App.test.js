// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Header component', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming Header has role="banner"
});

test('renders the Login page when navigating to /login', () => {
  window.history.pushState({}, 'Login page', '/login'); // Simulate navigation

  render(<App />);

  expect(screen.getByText(/login/i)).toBeInTheDocument(); // Adjust text if needed
});
