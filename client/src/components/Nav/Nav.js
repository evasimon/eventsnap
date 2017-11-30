import React from "react";

const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container-fluid">
      <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Badges
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/qr-reader">Scan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>;

export default Nav;
