import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../features/auth/authSlice';
import TextInput from '../components/common/TextInput';
import SubmitButton from '../components/common/SubmitButton';
import FormWrapper from '../components/common/FormWrapper';
import { Link } from 'react-router-dom';

const SignIn = () => {

  const[email,setEmail]  = useState('');
  const[password,setPassword] = useState('');
  const[error,setError] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      // Redirect or show success message
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
      {error &&  <p className='text-red-500 mb-4'>{error}</p>}
      <TextInput
       label='Email'
       value={email}
       onchange={(e)=> setEmail(e.target.value)}
       placeholder='Enter your email'
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <SubmitButton>Sign In</SubmitButton>
      <p className='mt-4 text-center'>
      Don't have an account?{" "}
      <Link to='/signup' className='text-blue-500 underline'>
       Sign Up
      </Link>
      </p>
    </FormWrapper>
  )
}

export default SignIn;