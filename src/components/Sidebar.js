import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Sidebar() {
    return (
        <ul className="sidebar navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/discover">
                    <i className="fas fa-fw fa-users"></i>
                    <span>Discover</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/my-videos">
                    <i className="fas fa-fw fa-user-alt"></i>
                    <span>My Videos</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/upload-video">
                    <i className="fas fa-fw fa-cloud-upload-alt"></i>
                    <span>Upload Video</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/history-page">
                    <i className="fas fa-fw fa-history"></i>
                    <span>History</span>
                </Link>
            </li>
            {/* More nav items */}
            {/* Ensure you have the corresponding routes set up in your Router component */}
        </ul>
    );
}

export default Sidebar;
