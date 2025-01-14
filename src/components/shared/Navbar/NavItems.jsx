import { NavLink } from "react-router-dom";

const NavItems = ({ href, label }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
        to={href}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItems;
