import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

const Signup = () => {

  // Get signup and login functions from AuthContext API
  const {navigate, signup } = useContext(AuthContext);

  // State for form inputs for signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password, navigate);
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      {/* Signup form */}  
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
