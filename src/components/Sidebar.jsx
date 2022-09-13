import React from "react";
import avatar from "../assets/image-jeremy.png";

function Sidebar(props) {
  const sidebarOptions = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img className="sidebar-profile-img" src={avatar} alt="" />
        <div className="sidebar-profile-text">
          <p className="sidebar-profile-top">Report for</p>
          <h1 className="sidebar-profile-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="sidebar-menu">
        {sidebarOptions.map((option, index) => (
          <p
            key={index}
            className={`sidebar-menu-item ${
              props.selected === index ? "sidebar-menu-item-highlight" : ""
            }`}
            onClick={() => props.selectSidebar(index)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
