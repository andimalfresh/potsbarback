import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar my-4 is-mobile"
      role="navigation"
      aria-label="main navigation"
    >
      {/* <div className="navbar-brand">

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> */}

      <div id="navbarBasicExample" className="navbar-menu is-mobile">
        <div className="navbar-start is-mobile">
          <div className="navbar-brand px-2">
            <Link to="/portal/events" className="navbar-item">
              Events
            </Link>
            <Link to="/portal/staff" className="navbar-item is-mobile">
              Shift
            </Link>

            <Link to="/portal/schedule" className="navbar-item">
              Schedule
            </Link>
            <Link to="/portal/incident" className="navbar-item">
              Incident
            </Link>
            <Link to="/portal/docs" className="navbar-item">
              Documentation
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Admin</a>

              <div className="navbar-dropdown">
                <Link to="/portal/management" className="navbar-item">
                  Management
                </Link>
                <Link to="/portal/comptrolling" className="navbar-item">
                  Comptrolling
                </Link>
                <Link to="/portal/admin/scheduleadmin" className="navbar-item">
                  Schedules Admin
                </Link>
                <Link to="/portal/admin/eventsadmin" className="navbar-item">
                  Events Admin
                </Link>
                <Link to="/portal/admin/employeeadmin" className="navbar-item">
                  Employee Admin
                </Link>

                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
