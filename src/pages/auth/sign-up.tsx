import { SignUp } from "@/api/sign-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from 'zod';
import { FileToUpload } from "./file-upload";




const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
  avatarId: z.string().nullable().optional(),

})

type SignUpForm = z.infer<typeof signUpForm>

export function SingUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm<SignUpForm>();

  const { mutateAsync: registerUser } = useMutation({
    mutationFn: SignUp,
  })


  async function handleSignUp(data: SignUpForm) {
    try {

      await registerUser({
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        avatarId: '1',
      })

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/`),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }


  return (
    <>
      <Helmet title="Login" />
      <Card className="w-[80vw] max-w-xl rounded-xl shadow-lg mt-5 font-dm-sans">
        <CardHeader className="mt-5 mx-12 text-2xl">
          <CardTitle>Crie sua conta</CardTitle>
          <CardDescription>Informe os seus dados pessoais e de acesso</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <CardContent className="mx-12 p-6 font-dm-sans text-sm">
            <CardTitle>Perfil</CardTitle>
            <div className="mt-6">
              <FileToUpload/>
            </div>
            <div className="grid w-full items-center gap-4">
              <Label htmlFor="name" className="mt-6">NOME</Label>
              <div className="relative w-full max-w-sm">
                      <img
                        src={"src/assets/icon/user.svg"}
                        alt="Ícone"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                      />
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        className="pl-10 pr-4 py-2 w-full border-gray-300 placeholder:text-gray-400"
                        {...register("name")}
                      />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="phone" className="mt-6">TELEFONE</Label>
              <div className="relative w-full max-w-sm">
                      <img
                        src={"src/assets/icon/call.svg"}
                        alt="Ícone"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                      />
                      <Input
                        id="phone"
                        placeholder="(00) 0000-0000"
                        className="pl-10 pr-4 py-2 w-full border-gray-300 placeholder:text-gray-400"
                        {...register("phone")}
                      />
              </div>
            </div>
            <div className="mt-6">
            <CardTitle>Acesso</CardTitle>
              <div className="grid w-full items-center gap-4 mt-6">
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
                        {...register("email")}
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
                        {...register("password")}
                        />


                      </div>
                  </div>
                </div>
                <Button className="bg-orange-500 !text-white justify-between text-action-md-size p-6 max-w-sm mt-6 w-full" type="submit">
                    Cadastrar
                    <img
                      src={"src/assets/icon/arrow-right-02.svg"}
                      alt="Ícone"
                      className="filter invert brightness-0 saturate-100 p-4"
                      />
                  </Button>

            </div>
          </CardContent>
        </form>

        <CardFooter className='mx-9 grid w-full !items-center gap-4 mt-1'>
            <p className="text-md text-gray-500">Já tem uma conta?</p>
          <Button variant='ghost' className="!text-orange-500 bg-white justify-between text-action-md-size p-6 border border-orange-500 max-w-sm">
            Acessar
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

