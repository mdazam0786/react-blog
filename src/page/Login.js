import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {

  // Get login function from AuthContext API
  const {navigate, login } = useContext(AuthContext);

  // State for form inputs for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
