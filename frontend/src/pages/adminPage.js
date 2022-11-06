import React, { useState } from "react";
import ViewStudent from "../components/adminComponents/viewStudents";
import { Link, Outlet } from "react-router-dom";
const AdminPage = () => {
  return (
    <div style={{ width: "100vw" }}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <a class="nav-head navbar-brand" href="#">
          Student Management System
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only"></span>
              </a>
            </li> */}
            <li class="nav-item">
              <Link to="/admin/view_student">
                <a class=" nav-link">Show Students</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/add_student">
                <a class="nav-link ">Add </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/update_student">
                <a class="nav-link ">Update </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/delete_student">
                <a class="nav-link " href="#">
                  Delete{" "}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div class="sidenavadmin">
        <Link to="/admin/view_student">
          <a>Show Students</a>
        </Link>
        <Link to="/admin/add_student">
          <a>Add Student</a>
        </Link>
        <Link to="/admin/update_student">
          <a>Update Students</a>
        </Link>
        <Link to="/admin/delete_student">
          <a>Delete Student</a>
        </Link>
      </div> */}
      <Outlet />

      <div class="footer">
        <p>copy right 2022 - 2023</p>
      </div>
    </div>
  );
};

export default AdminPage;
