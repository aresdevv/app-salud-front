import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    // Aquí puedes validar credenciales o hacer una petición a la API
    setUser({ fullName: "Diego Salazar Garcia" }); // Simulación de usuario autenticado
  };

  const handleLogout = () => setUser(null);

  return (
    <>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;