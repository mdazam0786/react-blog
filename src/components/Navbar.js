import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>📝 My Blog</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/" style={styles.link}>Blog List</Link>
        </li>
      </ul>
    </nav>
  );
};

// Basic Styles for the Navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#2c3e50", // Dark blue-gray
    color: "white",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    transition: "0.3s",
  },
};

export default Navbar;
