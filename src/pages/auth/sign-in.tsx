import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";


export function SingIn() {
  return (
    <>
      <Helmet title="Login" />
      <Card className="w-[80vw] max-w-xl h-auto rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>Informe seu e-mail e senha para entrar</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-MAIL</Label>
                <Input id="email" placeholder="Seu e-mail cadastrado" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">SENHA</Label>
                <Input id="password" placeholder="Sua senha de acesso" className="border-none border-b-2 border-border focus-visible:ring-0"/>
              </div>
              <Button className="bg-orange-500 text-white">Acessar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

