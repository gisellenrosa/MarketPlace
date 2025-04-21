import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { Products } from "./pages/app/products";
import { SingIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{path: "/sign-in", element: <SingIn />,}]

  },
]);
