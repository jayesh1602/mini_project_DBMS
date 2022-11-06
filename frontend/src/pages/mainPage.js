import React from "react";

const MainPage = () => {
  return (
    <div class="mainpage">
      <h1 class="text-center">Login Page</h1>
      <div class="main-buttons d-flex justify-content-center">
        <button type="button" class="btn btn-primary">
          Admin
        </button>
        <button type="button" className="main-btn btn btn-success ml-4">
          Student
        </button>
      </div>
    </div>
  );
};

export default MainPage;
