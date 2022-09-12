import { Routes, Route } from "react-router-dom";
import Board from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import history from "../Services/history";
import { AuthProvider } from "../Context/AuthContext";

const RoutesMain = () => {
  return (
    <AuthProvider>
      <Routes history={history}>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Board />} />
      </Routes>
    </AuthProvider>
  );
};

export default RoutesMain;
