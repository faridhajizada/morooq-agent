import React from "react";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={s.footerContent}>
        <div className={s.left}>
          <p>morooq © 2018-2024</p>
        </div>
        <div className={s.right}>
          <p>Created by benzeine</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
