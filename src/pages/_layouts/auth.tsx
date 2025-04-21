import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full   flex flex-col justify-between">
        <div></div>
        <footer></footer>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

