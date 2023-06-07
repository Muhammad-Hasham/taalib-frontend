import React from "react";
import NavBar from "../nav";
import SideBar from "../sideBar";
import EditForm from "./editform";

function EditTeacher() {

  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-8">
            <EditForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTeacher;
