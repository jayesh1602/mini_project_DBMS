import "../../css/login.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, StudentContext } from "../../App";
import { set } from "mongoose";

const StudentLogin = () => {
  const navigate = useNavigate();

  const { studentId, setStudentId } = useContext(StudentContext);
  const { status, setStatus } = useContext(AppContext);
  setStatus("student");
  useEffect(() => {
    if (status === "student") {
      navigate("/student/view_profile");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.error) {
      setError(true);
      setLoading(false);
      setStatus("logout");
    } else {
      setStatus("student");
      console.log(data);
      if (status === "student") {
        setLoading(false);
        setStudentId(data.user._id);
        navigate(`/student/view_profile/${data.user._id}`);
      }
    }
  };

  return (
    <div className="login-main">
      <div class="text-center">
        <main class="form-signin w-100 m-auto">
          <form onSubmit={login}>
            <h1 class="h3 mb-3 fw-normal">Student Login</h1>
            {error ? (
              <div class="alert alert-danger" role="alert">
                Invalid Credentials!!!
              </div>
            ) : null}
            <div class="form-floating">
              <input
                type="email"
                value={email}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="floatingInput">Email </label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                value={password}
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label for="floatingPassword">Password</label>
            </div>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : (
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
            )}
          </form>
        </main>
      </div>
    </div>
  );
};

export default StudentLogin;
