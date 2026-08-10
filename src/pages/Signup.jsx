import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Create Account</h2>

            <form onSubmit={handleSignup}>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

            </form>

            {message && (
              <div className="alert alert-success mt-3">
                {message}
              </div>
            )}

            {error && (
              <div className="alert alert-danger mt-3">
                {error}
              </div>
            )}

            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;

