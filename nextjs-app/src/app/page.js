"use client";

import { useState } from 'react';
import generateJwt from './api/generateJwt'

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jwt = await generateJwt(inputValue)
      setJwtToken(jwt || 'Error generating JWT');
    } catch (error) {
      console.error('Error generating JWT:', error);
      setJwtToken('Error generating JWT');
    }
  };

  return (
    <div>
      <h1>JWT Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button type="submit">Generate JWT</button>
      </form>
      {jwtToken && (
        <div>
          <h2>Generated JWT:</h2>
          <textarea readOnly value={jwtToken} rows="5" cols="60" />
        </div>
      )}
    </div>
  );
}
