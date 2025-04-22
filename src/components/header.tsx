import { Home, UtensilsCrossed } from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex h-16 items-center gap-6 px-6 justify-between">
      <img
        src={"src/assets/icon/logo.svg"}
        alt="Ícone"
      />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/products">
          <UtensilsCrossed className="h-4 w-4" />
          Produtos
        </NavLink>
      </nav>
      <div className="flex gap-4 items-center">
        <Button>
          <img
            src={"src/assets/icon/plus-sign.svg"}
            alt="Ícone"
            className="h-4 w-4"
          />
          Novo produto
        </Button>
        <img
         src={"src/assets/icon/user-example.svg"}
          alt="imagem de perfil"
          />
      </div>


    </div>
  )
}