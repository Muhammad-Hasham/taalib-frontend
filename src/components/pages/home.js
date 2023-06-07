import React from "react";
import NavBar from "./nav";
import SideBar from "./sideBar";
import homeGif from "../images/homeBG.gif";

function Home() {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <NavBar />
      <div style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10" style={{ position: 'absolute', height: '100%', left: '213px' }}>
            <h1
              className="display-4 font-weight-bold"
              style={{
                fontFamily: 'Montserrat',
                position: 'absolute',
                top: '30px',
                left: '20px',
                zIndex: '1',
              }}
            >
              Welcome Super Admin
            </h1>
            <img
              src={homeGif}
              alt="Cover GIF"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
