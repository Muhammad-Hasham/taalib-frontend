import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import AcaOfficerForm from "./AcaOfficerForm";

function RegisterAcaOfficer() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-8">
            <AcaOfficerForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAcaOfficer;
