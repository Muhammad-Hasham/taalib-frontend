import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";

function AccOffInfo() {
  const accountOfficer = JSON.parse(localStorage.getItem("accofficer"));
  console.log(accountOfficer)
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
              <h1>Account Officer Information</h1>
              <br />
              <h1>{accountOfficer.name}</h1>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{accountOfficer.employeeId}</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>{accountOfficer.role}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{accountOfficer.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{accountOfficer.password}</td>
                  </tr>
                  <tr>
                    <th>Registration Date</th>
                    <td>{accountOfficer.joiningDate}</td>
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

export default AccOffInfo;
