import React, { useState } from 'react';
import Login from './login';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', username: '', email: '', otherField: '' });
  const [errors, setErrors] = useState({});

  const handleChange = async(e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() }); // Trim removes leading and trailing spaces
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.indexOf(' ') >= 0) {
      newErrors.username = 'Username cannot contain spaces';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    const fetchadata = await fetch("http:localhost:4000/auth/signup",{
        nethod:"POST",
        header:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "email",
          name : "name",
        }),
    });
    
    
    

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${errors.username ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Up</button>
            <div className='mb-6 flex float-right'>Already have an account? <a href="/login"><span  className='text-blue-500 pl-2'> Sign in</span> </a></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
