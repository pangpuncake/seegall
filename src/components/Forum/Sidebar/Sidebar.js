import React from "react";
import NavigationItem from "../../Layout/Navigation/NavigationItems/NavigationItem/NavigationItem";

const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        width: "15%",
        height: "100vh",
        marginTop: "-15px",
        position: "fixed",
        color: "#bbb",
      }}
    >
      <ul
        style={{
          overflow: "hidden",
          position: "fixed",
          padding: "150px 0px",
          height: "100%",
          width: "15%",
        }}
      >
        <NavigationItem link="/forum/home">Home</NavigationItem>
        <NavigationItem link="/forum/newpost">Create Post</NavigationItem>
        <NavigationItem link="/forum/tags">Tags</NavigationItem>
        <NavigationItem link="/forum/popular">Popular</NavigationItem>
        <NavigationItem link="/forum/latest">Latest</NavigationItem>
      </ul>
    </div>
  );
};

export default Sidebar;
