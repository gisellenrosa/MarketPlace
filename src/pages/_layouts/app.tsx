import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased font-dm-sans">
        <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet/>
      </div>
    </div>
  );
}
