import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/users/auth/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/users/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
