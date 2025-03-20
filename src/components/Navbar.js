import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleLogout = () => {
    logout(navigate); // ✅ Pass navigate when calling logout
  };

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <h1 className="navbar-brand">📝 My Blog</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        {user ? (
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
