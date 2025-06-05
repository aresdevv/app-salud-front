import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pacientes from "./pages/Pacientes";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  const handleLogin = (credentials) => {
    setUser({ fullName: "Diego Salazar Garcia" });
  };
  const handleLogout = () => {
    setUser(null);
    setPage("dashboard");
  };

  // Renderizado condicional según la página
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  let content;
  if (page === "dashboard") {
    content = <Dashboard user={user} onLogout={handleLogout} onNavigate={setPage} />;
  } else if (page === "pacientes") {
    content = <Pacientes user={user} onLogout={handleLogout} onNavigate={setPage} />;
  }

  return <>{content}</>;
}

export default App;