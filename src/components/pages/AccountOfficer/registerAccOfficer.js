import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import AccOfficerForm from "./AccOfficerForm";

function RegisterAccOfficer() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-8">
            <AccOfficerForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAccOfficer;
