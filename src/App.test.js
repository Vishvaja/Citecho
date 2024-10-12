// App.test.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import AuthProvider from './services/authService';

test('renders Header and Footer components', () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

  // Check if Header and Footer are in the document
  expect(screen.getByRole('banner')).toBeInTheDocument();  // Assuming Header has role="banner"
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();  // Assuming Footer has role="contentinfo"
});

test('renders the Home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

  // Check for Home page content
  expect(screen.getByText(/home/i)).toBeInTheDocument();  // Replace 'home' with actual text from your Home page
});

test('navigates to the Discover page', () => {
  render(
    <MemoryRouter initialEntries={['/discover']}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

  // Check for Discover page content
  expect(screen.getByText(/discover/i)).toBeInTheDocument();  // Replace with actual text from Discover page
});

test('navigates to the Login page', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

  // Check for Login page content
  expect(screen.getByText(/login/i)).toBeInTheDocument();  // Replace with actual text from Login page
});
