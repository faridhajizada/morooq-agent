import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";

const sidebarData = [
  {
    id: 1,
    name: "Acquire tickets",
    path: "/agent/acquire-tickets",
  },
  {
    id: 2,
    name: "Share tickets",
    path: "/agent/share-tickets",
  },
  {
    id: 3,
    name: "My shared tickets",
    path: "/agent/my-shared-tickets",
  },
  {
    id: 4,
    name: "View student's results",
    path: "/agent/view-student's results",
  },

  {
    id: 5,
    name: "Personal details",
    path: "/agent/personal-details",
  },
  {
    id: 6,
    name: "Settings",
    path: "/agent/settings",
  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };
  return (
    <div className={s.sidebar}>
      <div className={s.personInfo}>
        <div className={s.personImg}>
          <img
            src="https://app.morooq.com/Content/AdminContent/image/user.svg"
            alt="User"
          />
        </div>
        <div className={s.personName}>
          <h5>Farid Hajizada</h5>
        </div>
      </div>
      <ul className={s.sidebar__list}>
        {sidebarData.map((item) => (
          <li
            key={item.id}
            className={`${s.sidebar__item} ${
              activeItem === item.id ? s.active : ""
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <Link to={item.path}>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
