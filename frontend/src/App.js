 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing necessary components
import io from 'socket.io-client';
import Login from './pages/login';
const socket = io('http://localhost:3001');  // Connexion au backend


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 

export default App;

