// src/pages/SignUp.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import register from '../features/auth/authSlice'; // Assuming you have a register action
import TextInput from '../components/common/TextInput';
import SubmitButton from '../components/common/SubmitButton';
import FormWrapper from '../components/common/FormWrapper';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await dispatch(register({ email, password })).unwrap();
      // Redirect or show success message
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <TextInput
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
      />
      <TextInput
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter your password'
      />
      <TextInput
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder='Confirm your password'
      />
      <SubmitButton>Sign Up</SubmitButton>
    </FormWrapper>
  );
};

export default SignUp;
