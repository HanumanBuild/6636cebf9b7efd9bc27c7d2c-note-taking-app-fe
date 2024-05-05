import axios from 'axios';
import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_NOTE_TAKING_APP_BE_URL}/api/users/login`, { email, password });
        localStorage.setItem('token', response.data.token);
        alert('Logged in successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;