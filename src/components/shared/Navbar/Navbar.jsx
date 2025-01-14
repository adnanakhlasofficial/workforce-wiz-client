import { FaBars, FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="wrapper flex justify-between items-center py-3">
      <h1 className="text-2xl font-bold text-primary">
        <Link to={"/"}>Workforce Wiz</Link>
      </h1>
      <div className="flex items-center gap-6 text-cocoBlack">
        <ul className="flex gap-2 items-center">
          <NavItems label={"Contact Us"} href={"/contact"} />
          <NavItems label={"Dashboard"} href={"/dashboard"} />
        </ul>
        <Link className="btn" to={"/sign-in"}>
          Sign In
        </Link>
        {/* <button className="flex gap-2 px-2 py-1 border border-slate-300 rounded-full">
          <FaBars size={28} className="text-walrus" />
          <FaCircleUser size={28} className="text-walrus" />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
