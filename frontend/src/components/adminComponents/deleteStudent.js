import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const DeleteStudent = () => {
  const { status, setStatus } = useContext(AppContext);
  const [list, setList] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (status != "admin") {
      setStatus("logout");
      navigate("/");
    }
    const fetchData = async () => {
      const res = await fetch("/viewStudent");
      const data = await res.json();
      setList(data.studentlist);
    };
    fetchData();
  }, []);

  const deleteStudent = async (id) => {
    alert("Are you sure to delete this student");
    setLoading(true);
    const res = await fetch("/deleteStudent", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      navigate("/");
    } else {
      alert("Student Deleted Successfully");
      setLoading(false);
    }
    navigate("/admin/view_student");
  };
  return (
    <div class="p-4">
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : null}
      <table class="table table-light">
        <thead class="h-14">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">mobile</th>
            <th scope="col">age</th>
            <th scope="col">roll no</th>
            <th scope="col">prn</th>
            <th scope="col">class</th>
            <th scope="col">division</th>
            {/* <th scope="col">Update</th> */}
          </tr>
        </thead>
        <tbody className="table-row">
          {list.length > 0
            ? list.map((item) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.age}</td>
                  <td>{item.rollno}</td>
                  <td>{item.prn}</td>
                  <td>{item.cls}</td>
                  <td>{item.division}</td>
                  <button
                    class="btn btn-primary ml-2"
                    onClick={() => deleteStudent(item._id)}
                  >
                    Delete
                  </button>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteStudent;
