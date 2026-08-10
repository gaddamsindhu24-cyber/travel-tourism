
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >
          ✈️ TravelGo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/destinations"
              >
                Destinations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            {/* Login */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>

            {/* Signup */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
