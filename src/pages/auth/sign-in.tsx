import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";


export function SingIn() {
  return (
    <>
      <Helmet title="Login" />
      <Card className="w-[80vw] max-w-xl h-[95vh] rounded-xl shadow-lg mt-5">
        <CardHeader className="mt-5 mx-12 text-2xl font-dm-sans">
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>Informe seu e-mail e senha para entrar</CardDescription>
        </CardHeader>
        <CardContent className="mx-12 p-3">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" >E-MAIL</Label>
                <div className="relative w-full max-w-sm">
                  <img
                    src={"src/assets/icon/mail-02.svg"}
                    alt="Ícone"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                  <Input
                    id="email"
                    placeholder="Seu e-mail cadastrado"
                    className="pl-10 pr-4 py-2 w-full border-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">SENHA</Label>
              <div className="relative w-full max-w-sm">
                  <img
                    src={"src/assets/icon/access.svg"}
                    alt="Ícone"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                  <Input id="password"
                  placeholder="Sua senha de acesso"
                  className="pl-10 pr-4 py-2 w-full border-gray-300 placeholder:text-gray-400"
                  />


                </div>
              </div>
              <Button className="bg-orange-500 !text-white justify-between text-action-md-size p-6 max-w-sm">

                  Acessar
                  <img
                    src={"src/assets/icon/arrow-right-02.svg"}
                    alt="Ícone"
                    className="filter invert brightness-0 saturate-100 p-4"
                    />
                </Button>

            </div>
          </form>
        </CardContent>
        <CardFooter className='mx-9 grid w-full !items-center gap-4 mt-40'>
            <p className="text-md text-gray-500">Ainda não tem uma conta?</p>
          <Button className="!text-orange-500 bg-white justify-between text-action-md-size p-6 border border-orange-500 max-w-sm">
            Cadastrar
            <img
              src={"src/assets/icon/arrow-right-02.svg"}
              alt="Ícone"
            />
          </Button>

        </CardFooter>
      </Card>
    </>
  )
}

