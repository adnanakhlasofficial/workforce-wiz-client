import { NavLink } from "react-router-dom";

const SidebarItem = ({ href, label, icon: Icon }) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "side-active" : "side-inactive"
        }
      >
        <Icon />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
