import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Context for storing authentication data
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // State for user authentication
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);


  // Load blogs from API when app starts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Signup function
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      alert("User already exists. Please login.");
      return;
    }

    // Add new user and save to localStorage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Log the user in
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/");
  };

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email && u.password === password);

    if (!existingUser) {
      alert("Invalid email or password!");
      return;
    }

    setUser(existingUser);
    localStorage.setItem("user", JSON.stringify(existingUser));
    navigate("/");
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    // Provide AuthContext with user, signup, login, blogs, and logout functions to children components.
    <AuthContext.Provider value={{ user, signup, login, blogs, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
