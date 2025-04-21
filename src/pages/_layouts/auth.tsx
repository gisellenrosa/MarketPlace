import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <h1 className="">Cabeçalho Autenticação</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

