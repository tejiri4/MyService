import React from "react";
import NavBar from "../../component/NavBar/index";
import { navArray } from "./fixtures";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <NavBar
        navArray={navArray}
        showButton
      />
    </React.Fragment>
  );
};

export default ProfilePage;
