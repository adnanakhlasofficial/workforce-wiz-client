import { IoDocument, IoSettingsSharp } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { GrLogout } from "react-icons/gr";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUsers } from "react-icons/fa6";

const Sidebar = () => {
  const { logoutUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Successfully logged out!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-whiteSmoke shadow-lg flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <h1 className="text-2xl font-bold text-primary">
              <Link to={"/"}>Workforce Wiz</Link>
            </h1>
          </div>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-primary/15"
        >
          <AiOutlineBars size={24} />
        </button>
      </div>
      <div
        className={`bg-whiteSmoke absolute lg:sticky top-0 ${
          sidebarOpen ? "left-0" : "-left-full"
        } h-screen px-9 flex flex-col py-8 shadow-lg lg:left-0 transition-all duration-300`}
      >
        <div className="block cursor-pointer pb-4 font-bold">
          <h1 className="text-2xl font-bold text-primary -ml-4 -mt-4">
            <Link to={"/"}>Workforce Wiz</Link>
          </h1>
        </div>
        <ul className="grow space-y-3">
          <SidebarItem
            label={"Work Sheet"}
            href={"/dashboard/work-sheet"}
            icon={IoDocument}
          />
          <SidebarItem
            label={"Payment History"}
            href={"/dashboard/payment-history"}
            icon={IoDocument}
          />
          <SidebarItem
            label={"Employee List"}
            href={"/dashboard/employee-list"}
            icon={FaUsers}
          />
        </ul>
        <ul className="space-y-3">
          <SidebarItem
            label={"Profile"}
            href={"/dashboard"}
            icon={IoSettingsSharp}
          />
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-primary/10 hover:bg-primary/70 text-cocoBlack transition duration-300 rounded-md text-lg font-semibold flex items-center gap-2 w-full"
          >
            <GrLogout /> <span>Logout</span>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
