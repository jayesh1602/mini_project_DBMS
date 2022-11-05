import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext, StudentContext } from "../../App";

const EditData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { studentId, setStudentId } = useContext(StudentContext);
  const [studentData, setStudentData] = useState({});
  const { status, setStatus } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (status !== "student") {
      setStatus("logout");
      navigate("/student_login");
    }
    const fetchStudentData = async () => {
      const res = await fetch(`/info/${studentId}`);
      const data = await res.json();
      if (data.error) {
        setStatus("logout");
        navigate("/student_login");
      } else {
        setStudentData(data.data);
      }
    };
    fetchStudentData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    let temp = { ...studentData };
    delete temp._id;
    delete temp.__v;
    const res = await fetch(`/editInfo/${studentId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
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
        navigate(`/student/view_profile/${studentId}`);
      }, 2000);
    }
  };

  return (
    <div className="viewdata-main">
      <form class="addform" onSubmit={handleUpdate}>
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
        <h2 class="mb-2 text-black">Student Information</h2>
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
              placeholder="Email"
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
              value={studentData.email}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              onChange={(e) => {
                let temp = { ...studentData };
                temp.email = e.target.value;
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
              type="tel"
              value={studentData.mobile}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
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
              value={studentData.age}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
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
              value={studentData.rollno}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
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
              type="text"
              value={studentData.prn}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
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
              type="text"
              value={studentData.cls}
              onChange={(e) => {
                let temp = { ...studentData };
                temp.cls = e.target.value;
                setStudentData(temp);
              }}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
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
              value={studentData.division}
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
              onChange={(e) => {
                let temp = { ...studentData };
                temp.division = e.target.value;
                setStudentData(temp);
              }}
            />
          </div>
        </div>
        <div class="edit-btn form-group row">
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

export default EditData;
