import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import "../../css/manageAccOfficer.css";
import reglogo from "../../images/new.png";
import editlogo from "../../images/edit.png";
import deleteLogo from "../../images/delete.png";
import viewLogo from "../../images/file.png";
import { useNavigate } from "react-router-dom";

function ManageAccOfficer() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <br />
            <div className="container">
              <h1>Manage Account Officers</h1>
              <br />
              <div className="row">
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageAccOfficer/RegisterAccOfficer");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={reglogo}
                      alt="Register Account Officer"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Register Account Officer</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageAccOfficer/EditAccOfficer");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        width: 100,
                        height: 100,
                      }}
                      src={editlogo}
                      alt="Edit Account Officer Info"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Edit Account Officer Info</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4"
                  onClick={() => navigate("/ManageAccOfficer/DeleteAccOfficer")}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={deleteLogo}
                      alt="Remove Account Officer"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remove Account Officer</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageAccOfficer/ViewAccOfficer");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        width: 100,
                        height: 100,
                      }}
                      src={viewLogo}
                      alt="Find an Account Officer"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Find an Account Officer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAccOfficer;
