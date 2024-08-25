import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Bienvenido, estás autenticado!</h1>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      
    </div>
  );
}

export default App;