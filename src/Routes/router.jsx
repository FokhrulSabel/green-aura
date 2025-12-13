import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import PlantDetails from "../pages/PlantDetails";
import LoadingPage from "../pages/LoadingPage";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";
import MyProfile from "../pages/MyProfile";
import ForgotPassword from "../pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: <TopRatedIndoorPlants />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
      }
    ],
  },
  {
    path: "/plantdetails/:plantId",
    element: (
      <PrivateRoute>
        <PlantDetails></PlantDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/plants.json"),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
export default router;
