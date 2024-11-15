// AuthForm.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Box, Typography } from '@mui/material';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = async () => {
    try {
      if (isRegister) {
        // Register new user
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registration successful!');
      } else {
        // Login existing user
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
    } catch (error) {
      alert(`Authentication error: ${error.message}`);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Typography variant="h4">{isRegister ? 'Register' : 'Login'}</Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mt: 2, width: '100%' }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mt: 2, width: '100%' }}
      />
      <Button onClick={handleAuth} variant="contained" sx={{ mt: 3, width: '100%' }}>
        {isRegister ? 'Register' : 'Login'}
      </Button>
      <Button onClick={() => setIsRegister(!isRegister)} sx={{ mt: 2, color: 'primary.main' }}>
        {isRegister ? 'Already have an account? Login' : 'Create an account'}
      </Button>
    </Box>
  );
};

export default AuthForm;

