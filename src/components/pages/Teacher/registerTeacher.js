import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import TeacherForm from "./TeacherForm";

function RegisterTeacher() {

  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-8">
            <TeacherForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterTeacher;
