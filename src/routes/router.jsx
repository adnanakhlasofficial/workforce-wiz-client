import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import Worksheet from "../pages/Worksheet/Worksheet";
import Profile from "../pages/Profile/Profile";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import Payroll from "../pages/Payroll/Payroll";
import AllEmployees from "../pages/AllEmployees/AllEmployees";
import Progress from "../pages/Progress/Progress";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";
import AdminRoute from "./AdminRoute";
import EmployeeDetails from "../pages/EmployeeDetails/EmployeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <EmployeeRoute>
              <Worksheet />
            </EmployeeRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <EmployeeRoute>
              <PaymentHistory />
            </EmployeeRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeList />
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <PrivateRoute>
            <HrRoute>
              <Progress />
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeDetails />
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payroll",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Payroll />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-employees",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllEmployees />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
