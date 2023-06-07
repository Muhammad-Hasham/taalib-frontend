import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeacherDelete() {

  const navigate = useNavigate();
  const teacher = JSON.parse(localStorage.getItem("teacher"));

  const handleDelete = () => {
    let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
    console.log(teacher.employeeId);
    console.log(token.token);
    axios
      .delete(
        `https://taalib-superadmin-api.onrender.com/api/teacher/delete/${teacher.employeeId}`,
        {
            headers: { Authorization: token },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Teacher Deleted");
        navigate("/ManageTeacher/DeleteTeacher");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!teacher || !teacher.name) {
    // Handle the case when teacher or teacher.name is null
    return <div>No teacher found.</div>;
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <div className="container">
              <br />
              <h1>Teacher Information</h1>
              <br />
              <h1>{teacher.name}</h1>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>{teacher.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{teacher.password}</td>
                  </tr>
                  <tr>
                    <th>Joining Date</th>
                    <td>{teacher.joiningDate}</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDelete;
