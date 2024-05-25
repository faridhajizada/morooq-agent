import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";

const sidebarData = [
  {
    id: 1,
    name: "Profile Info",
    path: "/dashboard/profile-info",
  },
  {
    id: 2,
    name: "Add Employer",
    path: "/dashboard/add-employer",
  },
  {
    id: 3,
    name: "List Employer",
    path: "/dashboard/list-employer",
  },
  {
    id: 4,
    name: "Create Table",
    path: "/dashboard/create-table",
  },
];

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <ul className={s.sidebar__list}>
        {sidebarData.map((item) => (
          <li key={item.id} className={s.sidebar__item}>
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
