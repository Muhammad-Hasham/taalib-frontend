import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";

function AcaOffInfo() {
  const academicOfficer = JSON.parse(localStorage.getItem("acaofficer"));
  console.log(academicOfficer)
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
              <h1>Academic Officer Information</h1>
              <br />
              <h1>{academicOfficer.name}</h1>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{academicOfficer.employeeId}</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>{academicOfficer.role}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{academicOfficer.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{academicOfficer.password}</td>
                  </tr>
                  <tr>
                    <th>Registration Date</th>
                    <td>{academicOfficer.joiningDate}</td>
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

export default AcaOffInfo;
