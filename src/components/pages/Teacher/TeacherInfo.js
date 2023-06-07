import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";

function TeacherInfo() {
  const teacher = JSON.parse(localStorage.getItem("teacher"));
  console.log(teacher)
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
                    <th>ID</th>
                    <td>{teacher.employeeId}</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>{teacher.role}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{teacher.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{teacher.password}</td>
                  </tr>
                  <tr>
                    <th>Registration Date</th>
                    <td>{teacher.joiningDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherInfo;
