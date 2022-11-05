import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const UpdateStudent = () => {
  const { status, setStatus } = useContext(AppContext);
  const [list, setList] = useState([{}]);
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

  return (
    <div class="p-4">
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
                  <Link to={`${item._id}`}>
                    <input
                      class="btn btn-primary ml-2"
                      type="reset"
                      value="Update"
                    ></input>
                  </Link>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateStudent;
