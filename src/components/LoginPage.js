
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import irshaad from '../images/logo/irshaad.png';
import loginBanner from '../images/logo/loging_banner.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., checking credentials)
    // If authentication is successful:
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl w-full">
        <div className="relative bg-green-500 h-56">
          <img
            src={loginBanner} 
            alt="Students"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute top-0 left-0 p-4">
            <img
              src={irshaad} 
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="UserName"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
