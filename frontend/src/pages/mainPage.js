import React from "react";
import { Link } from "react-router-dom";
import CollegeImg from "../img/pict_image.jpg";

const MainPage = () => {
  return (
    <div class="mainpage">
      <div className="mainpage-in">
        <h1 class="main-head text-center text-white text-bold ">Login Page</h1>
        <div class="main-buttons d-flex justify-content-center">
          <Link to="/admin_login">
            <button type="button" class="btn btn-primary">
              Admin
            </button>
          </Link>
          <Link to="/student_login">
            <button type="button" className="main-btn btn btn-success ml-4">
              Student
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
