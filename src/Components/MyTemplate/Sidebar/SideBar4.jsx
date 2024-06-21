import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  const location = useLocation();

  const getcolor = (curr) => {
    if (location.pathname === curr) {
      return "#4757ef";
    }
  };

  const getbackgroundcolor = (curr) => {
    if (location.pathname === curr) {
      return "#4757ef";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg  ms-4 mt-4 " style={{ zIndex: 1 }}>
      <div>
        <button
          className="navbar-toggler menu-bar "
          style={{ border: "none" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" ">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5 "
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav  flex-column nav_list  list-group ">
            <li className="nav-item nav_list_item  justify-content-center  d-flex list-group-item ps-0 ">
              <span
                className="ms-0 ps-0"
                style={{
                  backgroundColor: getbackgroundcolor(
                    "/Template4/PersonalInfo4"
                  ),
                  width: "3px",
                }}
              ></span>
              <NavLink
                className="nav-link  home mx-auto "
                aria-current="page"
                style={{ color: getcolor("/Template4/PersonalInfo4") }}
              >
                Personal Info
              </NavLink>
            </li>
            <li className="nav-item nav_list_items  justify-content-center d-flex list-group-item ps-0">
              <span
                className="ms-0 ps-0"
                style={{
                  backgroundColor: getbackgroundcolor(
                    "/Template4/WorkExperience4"
                  ),
                  width: "3px",
                }}
              ></span>
              <NavLink
                style={{ color: getcolor("/Template4/WorkExperience4") }}
                className="nav-link  home mx-auto "
              >
                Work Experience
              </NavLink>
            </li>
            <li className="nav-item nav_list_items  justify-content-center d-flex list-group-item ps-0">
              <span
                className="ms-0 ps-0"
                style={{
                  backgroundColor: getbackgroundcolor("/Template4/KeySkills4"),
                  width: "3px",
                }}
              ></span>
              <NavLink
                className="nav-link  home  mx-auto"
                style={{ color: getcolor("/Template4/KeySkills4") }}
              >
                Key Skills
              </NavLink>
            </li>
            <li className="nav-item nav_list_items  justify-content-center d-flex list-group-item ps-0">
              <span
                className="ms-0 ps-0"
                style={{
                  backgroundColor: getbackgroundcolor("/Template4/Education4"),
                  width: "3px",
                }}
              ></span>
              <NavLink
                className="nav-link  home  mx-auto  "
                style={{ color: getcolor("/Template4/Education4") }}
              >
                Education
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
