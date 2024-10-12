import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Assuming authService.js is located under a /services directory relative to this file
import { useAuth } from '../services/authService';

import '../styles/floating-body.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/account'); // Redirect to the account page on successful login
    } else {
      setError('Invalid email or password'); // Show an error message
    }
  };

  return (
    <form className="form-signin" onSubmit={handleLogin}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
      </div>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <div style={{ height: '15px' }}></div>
      <p className="text-center">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600">Sign Up here</Link>
      </p>
    </form>
  );
}

export default Login;
