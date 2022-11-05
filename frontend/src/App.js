import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import AdminPage from "./pages/adminPage";
import StudentPage from "./pages/studentPage";
import AddStudent from "./components/adminComponents/addStudent";
import ViewStudent from "./components/adminComponents/viewStudents";
import UpdateStudent from "./components/adminComponents/updateStudent";
import DeleteStudent from "./components/adminComponents/deleteStudent";
import ViewData from "./components/studentComponents/viewData";
import StudentLogin from "./components/loginComponent/studentlogin";
import EditData from "./components/studentComponents/editData";
import LoginForm from "./components/loginComponent/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useMemo, useState } from "react";

export const AppContext = createContext({
  status: "",
  setStatus: () => {},
});

export const StudentContext = createContext({
  studentId: "",
  setStudentId: () => {},
});

function App() {
  const [status, setStatus] = useState("logout");
  const [studentId, setStudentId] = useState("");
  const value = useMemo(() => ({ status, setStatus }), [status]);
  const student_id = useMemo(() => ({ studentId, setStudentId }), [studentId]);

  return (
    <AppContext.Provider value={value}>
      <StudentContext.Provider value={student_id}>
        {/* <MainPage /> */}
        {/* <AdminPage /> */}
        {/* <StudentPage /> */}
        {/* <AddStudent /> */}
        {/* <ViewStudent /> */}
        {/* <UpdateStudent /> */}
        {/* <DeleteStudent /> */}
        {/* <ViewData /> */}
        {/* <EditData /> */}
        {/* <LoginForm /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>

            <Route path="admin_login" element={<LoginForm />} />
            <Route path="student_login" element={<StudentLogin />} />
            <Route path="admin" element={<AdminPage />}>
              <Route path="view_student" element={<ViewStudent />} />
              <Route path="add_student" element={<AddStudent />} />
              <Route path="update_student" element={<UpdateStudent />} />
              <Route path="delete_student" element={<DeleteStudent />} />
            </Route>
            <Route path="student" element={<StudentPage />}>
              <Route path="view_profile/:id" element={<ViewData />} />
              <Route path="update_profile/:id" element={<EditData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StudentContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
