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
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <Worksheet />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        ),
      },
      {
        path: "payroll",
        element: (
          <PrivateRoute>
            <Payroll />
          </PrivateRoute>
        ),
      },
      {
        path: "all-employees",
        element: (
          <PrivateRoute>
            <AllEmployees />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
