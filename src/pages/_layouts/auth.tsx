import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid  grid-cols-[3fr_2fr] font-dm-sans">
      <div className="h-full flex flex-col justify-between">
        <div>
          <img
            src={"src/assets/Logo.svg"}
            alt="Ícone"
            className="mt-8 ml-8"/>
          <img
            src={"src/assets/Background.png"}
            alt="Ícone"
          />
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

