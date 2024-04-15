import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedName = localStorage.getItem('name');

        setToken(storedToken);
        setUserId(storedUserId);
        setName(storedName);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Token: {token}</p>
            <p>User ID: {userId}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default Dashboard;