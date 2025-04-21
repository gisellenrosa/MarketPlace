import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SingIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{path: "/home", element: <Dashboard />,}]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{path: "/sign-in", element: <SingIn />,}]

  },
]);
