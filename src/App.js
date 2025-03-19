import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import { BlogProvider } from "./context/BlogContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
