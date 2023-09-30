import React from "react";

const SideNav = () => {
  return (
    <nav className="SideNav-list">
      <a className="SideNav-link" href="/">
        <img src="/icons/home_icon.png" className="icon" alt=""/>
      </a>
      <a className="SideNav-link" href="/">
        <img src="/icons/checklist_icon.png" className="icon" alt=""/>
      </a>
    </nav>
  );
};

export default SideNav;
