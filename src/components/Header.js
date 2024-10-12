import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../services/authService';

function Header() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleMyAccountClick = (e) => {
    e.preventDefault();
    navigate(isLoggedIn ? '/account' : '/login');
  };

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">CiteEcho</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/discover">Discover</Link>
                    </li>
                    <li className="nav-item dropdown active">
                        <Link className="nav-link dropdown-toggle" to="/create" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</Link>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <Link className="dropdown-item" to="/upload-video">Upload Video Directly</Link>
                            <Link className="dropdown-item" to="/generate-video">Generate Video with AI</Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                        {/* Use onClick handler to determine navigation */}
                        <Link to="/account" className="nav-link" onClick={handleMyAccountClick}>My Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
