import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import Signup from "./page/Signup";

const App = () => {
  return (
    // Wrap everything inside Router
    <Router>
      <AuthProvider>
        {/* Navbar component */}
        <Navbar />
        <Routes>
          {/* Default route for BlogList */}
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
