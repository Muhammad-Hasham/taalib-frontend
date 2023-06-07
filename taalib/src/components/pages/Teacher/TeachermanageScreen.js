import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import "../../css/manageAccOfficer.css";
import reglogo from "../../images/new.png";
import editlogo from "../../images/edit.png";
import deleteLogo from "../../images/delete.png";
import viewLogo from "../../images/file.png";
import { useNavigate } from "react-router-dom";

function ManageTeacher() {
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
              <h1>Manage Teachers</h1>
              <br />
              <div className="row">
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageTeacher/RegisterTeacher");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={reglogo}
                      alt="Register Teacher"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Register Teacher</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageTeacher/EditTeacher");
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
                      alt="Edit Teacher Info"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Edit Teacher Info</h5>
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
                  onClick={() => navigate("/ManageTeacher/DeleteTeacher")}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={deleteLogo}
                      alt="Remove Teacher"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remove Teacher</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageTeacher/ViewTeacher");
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
                      alt="Find a Teacher"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Find a Teacher</h5>
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

export default ManageTeacher;
