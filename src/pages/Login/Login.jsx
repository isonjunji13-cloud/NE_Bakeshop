import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LogIn() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log("Employee ID:", employeeId);
    console.log("Password:", password);
  }

  return (
    <main className="employee-login-page">

      <div className="employee-login-card">

        <div className="employee-login-logo">
          <img
            src="/Logo/logo.jpg"
            alt="NE BakeShop Logo"
          />
        </div>

        <div className="employee-login-header">
          <p>NE BakeShop</p>

          <h1>Employee Sign In</h1>

          <span>
            Sign in to access your employee account.
          </span>
        </div>

        <form
          className="employee-login-form"
          onSubmit={handleLogin}
        >

          <div className="employee-form-group">
            <label htmlFor="employee-id">
              Employee ID
            </label>

            <input
              id="employee-id"
              type="text"
              placeholder="Enter your employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>

          <div className="employee-form-group">
            <label htmlFor="employee-password">
              Password
            </label>

            <input
              id="employee-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="employee-forgot">
            <Link to="/employee-forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="employee-submit"
          >
            Sign In
          </button>

        </form>

        <Link to="/" className="employee-back">
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}