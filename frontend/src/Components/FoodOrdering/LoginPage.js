import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if(username === 'himaya@gmail.com' && password === '2024'){
        navigate('/adminlayout');
      }
    } catch (err) {
      console.log(err?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to Admin Panel</h3>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              <input 
                className="pl-2 outline-none border-none"
                type="text" 
                name="username" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <FontAwesomeIcon icon={faLock} className="text-gray-400" />
              <input 
                className="pl-2 outline-none border-none"
                type="password" 
                name="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Login</button>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
