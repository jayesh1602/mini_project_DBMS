import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext, StudentContext } from "../../App";

const ViewData = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const { status, setStatus } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    const viewData = async () => {
      if (status === "student") {
        const res = await fetch(`/info/${id}`);
        const data = await res.json();
        console.log(data.data);
        if (data.error) {
          setStatus("logout");
          navigate("/student_login");
        } else {
          setStudentData(data.data);
        }
      } else {
        setStatus("logout");
        navigate("/student_login");
      }
    };
    viewData();
  }, []);

  return (
    <div className="viewdata-main">
      <form class="addform ">
        <h2 class="mb-2">Student Information</h2>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              value={studentData.fullname}
              class="form-control"
              id="inputEmail3"
              placeholder="name"
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              value={studentData.email}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            mobile
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              value={studentData.mobile}
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            age
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              value={studentData.age}
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Roll No.
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              value={studentData.rollno}
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            prn
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              value={studentData.prn}
              placeholder=""
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            class
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder=""
              value={studentData.cls}
              readOnly
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            division
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              value={studentData.division}
              placeholder=""
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewData;
