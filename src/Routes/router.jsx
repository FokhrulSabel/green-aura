import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
        {
            path: "",
            element:<Home></Home>
        }
    ]
  },
  {
    path: "/auth",
    element:<AuthLayout/>,
  },
  {
    path: "/profile",
    element: <h2>my profile</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
export default router;
