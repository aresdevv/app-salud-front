import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Link to="/login"></Link>
      <Link to="/home"></Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
