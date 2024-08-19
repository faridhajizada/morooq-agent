import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";

const sidebarData = [
  {
    id: 1,
    name: "Acquire tickets",
    path: "/agent/acquire-tickets",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/external-line512-zulfa-mahendra/64/FFFFFF/external-tickets-carnival-line512-zulfa-mahendra.png"
        alt="external-tickets-carnival-line512-zulfa-mahendra"
      />
    ),
  },
  {
    id: 2,
    name: "Share tickets",
    path: "/agent/share-tickets",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/quill/50/FFFFFF/two-tickets.png"
        alt="two-tickets"
      />
    ),
  },
  {
    id: 3,
    name: "My sharings",
    path: "/agent/my-sharings",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/dotty/80/FFFFFF/share.png"
        alt="share"
      />
    ),
  },
  {
    id: 4,
    name: "View student's results",
    path: "/agent/view-student's results",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/windows/32/FFFFFF/clipboard-approve.png"
        alt="clipboard-approve"
      />
    ),
  },

  {
    id: 5,
    name: "Personal details",
    path: "/agent/personal-details",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/FFFFFF/external-info-mutuline-shopping-others-zufarizal-robiyanto.png"
        alt="external-info-mutuline-shopping-others-zufarizal-robiyanto"
      />
    ),
  },
  {
    id: 6,
    name: "Settings",
    path: "/agent/settings",
    img: (
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios/50/FFFFFF/settings--v1.png"
        alt="settings--v1"
      />
    ),
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
            <Link to={item.path} className={s.content}>
              {item.img}
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
