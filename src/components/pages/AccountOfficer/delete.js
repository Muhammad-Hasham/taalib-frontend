import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AccountOfficerDelete() {

  const navigate = useNavigate();
  const accountOfficer = JSON.parse(localStorage.getItem("accofficer"));

  const handleDelete = () => {
    let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
    console.log(accountOfficer.employeeId);
    console.log(token.token);
    axios
      .delete(
        `https://taalib-superadmin-api.onrender.com/api/accountOfficer/delete/${accountOfficer.employeeId}`,
        {
            headers: { Authorization: token },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Account Officer Deleted");
        navigate("/ManageAccOfficer/DeleteAccOfficer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!accountOfficer || !accountOfficer.name) {
    // Handle the case when accountOfficer or accountOfficer.name is null
    return <div>No account officer found.</div>;
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
              <h1>Account Officer Information</h1>
              <br />
              <h1>{accountOfficer.name}</h1>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>{accountOfficer.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{accountOfficer.password}</td>
                  </tr>
                  <tr>
                    <th>Joining Date</th>
                    <td>{accountOfficer.joiningDate}</td>
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

export default AccountOfficerDelete;
