
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3001');  // Connexion au backend


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

