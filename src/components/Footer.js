import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const footerStyle = {
        backgroundColor: '#eaeef4',
        marginTop: 'auto',
        width: '100%',
    };

    return (
        <footer className="text-center" style={footerStyle}>
            <div className="container">
                <p>&copy; CiteEcho 2024</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="#">Privacy</Link></li>
                    <li className="list-inline-item"><Link to="#">Terms</Link></li>
                    <li className="list-inline-item"><Link to="#">Support</Link></li>
                </ul>
                <p className="float-right">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '10px',
                            color: '#007bff', // Bootstrap primary color for consistency
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                        <span style={{ marginRight: '5px' }}>Back to top</span>
                        <i className="fas fa-arrow-up"></i> {/* Font Awesome arrow */}
                    </button>
                </p>

            </div>
        </footer>

    );
}

export default Footer;
