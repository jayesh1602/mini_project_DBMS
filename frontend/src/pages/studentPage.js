import { Link, Outlet } from "react-router-dom";
const StudentPage = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <a class="navbar-brand" href="#">
          Navbar
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
            <li class="nav-item">
              <Link to="/student/view_profile">
                <a class="nav-link">View Profile</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/student/update_profile">
                <a class="nav-link ">Update</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />





      {/* <div class="sidenavstudent">
        <Link to="/student/view_profile">
          <a>View Profile</a>
        </Link>
        <Link to="/student/update_profile">
          <a>Update Profile</a>
        </Link>
      </div>
      <div class="mainstudent">
        <Outlet />
      </div> */}
    </div>
  );
};

export default StudentPage;
