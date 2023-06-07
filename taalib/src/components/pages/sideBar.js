import React from "react";
import { Nav } from "react-bootstrap";
import pro from "../images/profile.png";
import course from "../images/courses.png";

function Sidebar() {

  return (
    <div
      className="sidebar bg-dark d-flex flex-column vh-100"
    >
      <br></br>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Item style={{ paddingBottom: 10 }}>
          <Nav.Link href="/ManageAcaOfficer" className="text-light">
            <img
              src={pro}
              alt="Academic"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Academic Officer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ paddingBottom: 10 }}>
          <Nav.Link href="/ManageAccOfficer" className="text-light">
            <img
              src={pro}
              alt="Account Officer"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Account Officer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ManageTeacher" className="text-light">
            <img
              src={course}
              alt="Teacher"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Teacher
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
