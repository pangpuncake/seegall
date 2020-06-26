import React from "react";
import NavigationItem from "../../Layout/Navigation/NavigationItems/NavigationItem/NavigationItem";
import { MDBIcon } from "mdbreact";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "slategrey",
        width: "15%",
        position: "fixed",
        height: "100vh",
        marginTop: "-15px",
      }}
    >
      <ul style={{ overflow: "hidden", position: "fixed", padding: "150px 0" }}>
        <NavigationItem link='/forum/home'>
          {" "}
          <MDBIcon icon='home' />
          Home
        </NavigationItem>
        <NavigationItem link='/forum/newpost'>Create Post</NavigationItem>
        <NavigationItem link='/forum/tags'>Tags</NavigationItem>
        <NavigationItem link='/forum/popular'>Popular</NavigationItem>
        <NavigationItem link='/forum/latest'>Latest</NavigationItem>
      </ul>
    </div>
  );
};

export default Sidebar;
