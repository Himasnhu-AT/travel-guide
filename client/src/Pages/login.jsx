import React, { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import login from './signup';
import Auth from './auth';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  

  const handleChange = async (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }

    const fetchdata = await fetch("http://localhost:4000/auth/signin",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })

    const res = await fetchdata.json()
    console.log(res)

    // Process login or navigate to authorization page
    window.location.href = `/authorization?email=${email}`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-4 py-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-xm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`py-1 px-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${error ? 'border-red-500' : ''}`}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            {/* Wrap the button inside form, removed Link */}
            <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full">
              Login
            </button>
            <div className='mt-3 mb-4 flex float-right'>Don't have an account? <a href="/signup"><span  className='text-blue-500 pl-2 '>  Register Now</span> </a></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
