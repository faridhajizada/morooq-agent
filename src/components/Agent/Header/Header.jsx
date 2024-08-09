import React from "react";
import LogOut from "./../../LogOut/LogOut";
import "./Header.scss";

const Header = React.memo(() => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="header">
            <div className="title">
              <strong>morooq</strong>
              <span>exams</span>
            </div>
            <div className="userInfo">
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
