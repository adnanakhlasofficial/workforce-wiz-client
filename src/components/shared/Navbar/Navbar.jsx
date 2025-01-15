import { FaBars, FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Successfully logged out!");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="wrapper flex justify-between items-center py-3 relative">
      <h1 className="text-2xl font-bold text-primary">
        <Link to={"/"}>Workforce Wiz</Link>
      </h1>
      <div className="flex items-center gap-6 text-cocoBlack">
        <ul className="flex gap-4 items-center">
          <NavItems label={"Home"} href={"/"} />
          <NavItems label={"Contact Us"} href={"/contact"} />
        </ul>
        {!user && !user?.email ? (
          <Link className="btn" to={"/sign-in"}>
            Sign In
          </Link>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-2 py-1 border border-slate-300 rounded-full"
          >
            <FaBars size={20} className="text-primary" />
            {user ? (
              <img
                className="w-10 h-10 rounded-full object-cover object-center"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            ) : (
              <FaCircleUser size={40} className="text-primary" />
            )}
          </button>
        )}
        {isOpen && (
          <div className="absolute rounded-md z-20 shadow-md w-[40vw] md:w-[10vw] bg-errigalWhite overflow-hidden right-0 top-full text-sm">
            <div className="flex flex-col cursor-pointer">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="px-4 py-3 hover:bg-midnightOcean hover:text-errigalWhite transition font-semibold"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 block text-left hover:bg-midnightOcean hover:text-errigalWhite transition font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-3 hover:bg-midnightOcean hover:text-errigalWhite transition font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-3 hover:bg-midnightOcean hover:text-errigalWhite transition font-semibold"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
