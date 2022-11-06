import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext, StudentContext } from "../../App";

const AddStudent = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const { status, setStatus } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (status !== "admin") {
      setStatus("logout");
      navigate("/");
    }
  }, []);
  const addStudent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    const res = await fetch(`/addStudent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    const data = await res.json();
    if (data.error) {
      setLoading(false);
      setError(true);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setLoading(false);
        navigate("/admin/view_student");
      }, 2000);
    }
  };
  return (
    <div class="addstudent">
      <form class="addform" onSubmit={addStudent}>
        {error ? (
          <div class="alert alert-danger" role="alert">
            Please Enter Correct Data and Try Again!!!
          </div>
        ) : null}
        {success ? (
          <div class="alert alert-success" role="alert">
            Information Updated Successfully!!!
          </div>
        ) : null}
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="name"
              value={studentData.fullname ? studentData.fullname : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.fullname = e.target.value;
                setStudentData(temp);
              }}
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
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              value={studentData.email ? studentData.email : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.email = e.target.value;
                setStudentData(temp);
              }}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
              value={studentData.password ? studentData.password : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.password = e.target.value;
                setStudentData(temp);
              }}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            mobile
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="e.g 8956895247"
              value={studentData.mobile ? studentData.mobile : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.mobile = e.target.value;
                setStudentData(temp);
              }}
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
              placeholder="e.g 21"
              value={studentData.age ? studentData.age : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.age = e.target.value;
                setStudentData(temp);
              }}
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
              placeholder="e.g 31352"
              value={studentData.rollno ? studentData.rollno : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.rollno = e.target.value;
                setStudentData(temp);
              }}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            PRN
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder="e.g 32134"
              value={studentData.prn ? studentData.prn : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.prn = e.target.value;
                setStudentData(temp);
              }}
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
              placeholder="e.g 10"
              value={studentData.cls ? studentData.cls : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.cls = e.target.value;
                setStudentData(temp);
              }}
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
              id="division"
              placeholder="e.g A"
              value={studentData.division ? studentData.division : ""}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.division = e.target.value;
                setStudentData(temp);
              }}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <div class="col-sm-10">
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : (
              <button type="submit" class="btn btn-primary text-white">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
