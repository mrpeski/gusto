import React from "react";

const TopNavigation = () => {
  return (
    <nav className="Navigation-list">
      <a className="Navigation-link" href="">
        Program Details
      </a>
      <a className="Navigation-link active" href="">
        Application Form
      </a>
      <a className="Navigation-link" href="">
        Workflow
      </a>
      <a className="Navigation-link" href="">
        Preview
      </a>
    </nav>
  );
};

export default TopNavigation;
