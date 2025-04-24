import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";

const queryClient = new QueryClient()

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='MarketPlace'/>
      <QueryClientProvider client={queryClient}>
        <Toaster/>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}

