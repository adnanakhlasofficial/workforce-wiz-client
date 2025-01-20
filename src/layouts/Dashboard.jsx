import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex bg-errigalWhite">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-5 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
