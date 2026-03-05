import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    const history = useHistory();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        history.push('/');
    };

    return (
        // Full screen background container (matching the Login page)
        <div style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at top, #dbeafe, #93c5fd)',
            margin: 0,
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            {/* White Welcome Card */}
            <div style={{
                background: '#ffffff',
                width: '100%',
                maxWidth: '380px',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                padding: '40px',
                textAlign: 'center',
                boxSizing: 'border-box'
            }}>
                {/* Success Checkmark Icon (SVG) */}
                <div style={{
                    background: '#dcfce7',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="#22c55e">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>

                {/* Greeting */}
                <h1 style={{
                    margin: '0 0 10px 0',
                    color: '#475569',
                    fontSize: '26px',
                    fontWeight: '700'
                }}>
                    Welcome, {username ? username : 'Guest'}!
                </h1>

                {/* Subtitle */}
                <p style={{
                    margin: '0 0 30px 0',
                    color: '#64748b',
                    fontSize: '15px',
                    lineHeight: '1.5'
                }}>
                    You have successfully authenticated and logged into the application.
                </p>

                {/* Back Button */}
                <button onClick={handleLogout} style={{
                    background: 'white',
                    color: '#3b82f6',
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)'
                }}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default Welcome;