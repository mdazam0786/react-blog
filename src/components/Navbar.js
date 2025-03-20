import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // Get user and logout from AuthContext
  const {navigate, user, logout } = useContext(AuthContext);
  

  // This function handles logout clicks for navigation
  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar-brand">My Blog</h1>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* Only show logout button if user is logged. when user is not login then it will show login and signup */}

        {user ? (
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
