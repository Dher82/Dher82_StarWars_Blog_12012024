import React from "react";
import starWarsLogo from "../../img/starwarslogo.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-5 py-3">
      <Link to="/">
        <img src={starWarsLogo} style={{ width: "120px" }} />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites &nbsp;
              <span className="badge bg-secondary ml-2">4</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item">
                  Action &nbsp;
                  <i className="fa fa-trash"></i>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};

