// src/App.jsx
import { useState } from 'react';
import './App.css';

// Rutas directas
import FormLogin from './sections/login/FormLogin';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) =>
    setUser({ fullName: 'Diego Salazar Garcia', ...credentials });

  const handleLogout = () => setUser(null);

  if (!user) return <FormLogin onSuccess={handleLogin} />;

  return <Dashboard user={user} onLogout={handleLogout} />;
}

export default App;
