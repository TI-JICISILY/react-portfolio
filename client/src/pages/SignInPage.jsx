import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleLogin = (token) => {
    console.log('User logged in:', token);
    localStorage.setItem('token', token);
    navigate('/'); // Redirect to home or dashboard
  };

  return (
    <div>
      <h1>Login</h1>
      <SignInForm onLogin={handleLogin} />
    </div>
  );
};

export default SignInPage;
