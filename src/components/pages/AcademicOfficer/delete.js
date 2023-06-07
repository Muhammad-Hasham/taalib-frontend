import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AcademicOfficerDelete() {

  const navigate = useNavigate();
  const academicOfficer = JSON.parse(localStorage.getItem("acaofficer"));

  const handleDelete = () => {
    let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
    console.log(academicOfficer.employeeId);
    console.log(token.token);
    axios
      .delete(
        `https://taalib-superadmin-api.onrender.com/api/academicOfficer/delete/${academicOfficer.employeeId}`,
        {
            headers: { Authorization: token },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Academic Officer Deleted");
        navigate("/ManageAcaOfficer/DeleteAcaOfficer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!academicOfficer || !academicOfficer.name) {
    // Handle the case when academicOfficer or academicOfficer.name is null
    return <div>No Academic officer found.</div>;
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
              <h1>Academic Officer Information</h1>
              <br />
              <h1>{academicOfficer.name}</h1>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>{academicOfficer.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{academicOfficer.password}</td>
                  </tr>
                  <tr>
                    <th>Joining Date</th>
                    <td>{academicOfficer.joiningDate}</td>
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

export default AcademicOfficerDelete;
