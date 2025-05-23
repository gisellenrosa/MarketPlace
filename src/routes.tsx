import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { ProductRegister } from "./pages/app/product-register";
import { Products } from "./pages/app/products";
import { SingIn } from "./pages/auth/sign-in";
import { SingUp } from "./pages/auth/sign-up";

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
      {
        path: '/new-product',
        element: <ProductRegister />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {path: "/sign-in", element: <SingIn />},
      {path: '/sign-up',element: <SingUp />},
    ]
  },
]);
