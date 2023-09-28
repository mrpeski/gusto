import React from "react";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <>
      <section className="header">
        <button className="Button Menu">
          <img src="/icons/menu_icon.svg" alt="Menu" />
        </button>
      </section>
      <SideNav />
      <section className="footer">
        <span className="Avatar">MK</span>
      </section>
    </>
  );
};

export default Sidebar;
