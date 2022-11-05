import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div class="">
      <h1 class="text-center">Login Page</h1>
      <div class="d-flex justify-content-center">
        <Link to="/admin_login">
          <button type="button" class="btn btn-primary">
            Admin
          </button>
        </Link>
        <Link to="/student_login">
          <button type="button" className="btn btn-success ml-4">
            Student
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
