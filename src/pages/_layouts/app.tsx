import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Cabeçalho</h1>
      <div> <Outlet/> </div>
    </div>
  );
}
