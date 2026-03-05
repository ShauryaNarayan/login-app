import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    // Lazy initialize to avoid the useEffect warning
    const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            
            if (response.status === 200) {
                localStorage.setItem('username', username);
                history.push('/welcome'); 
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError('Network error. Is the backend running?');
            }
        }
    };

    return (
        // Full screen background container
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
            {/* White Login Card */}
            <div style={{
                background: '#ffffff',
                width: '100%',
                maxWidth: '380px',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                padding: '40px',
                boxSizing: 'border-box'
            }}>
                {/* Title */}
                <h2 style={{
                    margin: '0 0 15px 0',
                    color: '#475569',
                    fontSize: '28px',
                    textAlign: 'center',
                    fontWeight: '700'
                }}>Login</h2>
                
                {/* Divider line */}
                <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '25px' }}></div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Username Field */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Username</label>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #cbd5e1',
                            borderRadius: '8px',
                            padding: '0 12px',
                            background: '#f8fafc'
                        }}>
                            {/* User Icon (SVG) */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#94a3b8" style={{ marginRight: '10px', flexShrink: 0 }}>
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'transparent',
                                    padding: '14px 0',
                                    width: '100%',
                                    fontSize: '15px',
                                    color: '#334155'
                                }}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Password</label>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #cbd5e1',
                            borderRadius: '8px',
                            padding: '0 12px',
                            background: '#f8fafc'
                        }}>
                            {/* Lock Icon (SVG) */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#94a3b8" style={{ marginRight: '10px', flexShrink: 0 }}>
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                            </svg>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'transparent',
                                    padding: '14px 0',
                                    width: '100%',
                                    fontSize: '15px',
                                    color: '#334155'
                                }}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{
                        background: 'linear-gradient(to bottom, #3b82f6, #2563eb)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        marginTop: '10px',
                        boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
                    }}>
                        Login
                    </button>
                </form>

                {/* Error Message */}
                {error && <p style={{ color: '#ef4444', marginTop: '15px', textAlign: 'center', fontSize: '14px', fontWeight: '500' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;