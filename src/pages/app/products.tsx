import { getCategories } from "@/api/get-categories";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const productsForm = z.object({
  search: z.string(),
  status: z.string(),
})

type ProductsForm = z.infer<typeof productsForm>


export function Products()  {
  const {
    register,
    // handleSubmit,
    // formState: { isSubmitting },
  } = useForm<ProductsForm>();

  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getCategories(),

  })

  console.log(result)

  return (
    <div className="px-20 ">
      <h1 className="text-2xl font-bold">Últimos 30 dias</h1>
      <p className="text-md  text-gray-500">Confira as estatísticas da sua loja no ultimo mês</p>
      <div className="grid grid-cols-[1fr_3fr] gap-10 mt-10 ">
        <div className="flex flex-col gap-10">

          <Card className="rounded-4xl">
            <form>
              <CardContent className="flex flex-col font-dm-sans text-sm gap-6">
                <CardTitle> Filtrar </CardTitle>
                  <div className="flex flex-col space-y-1.5">
                    <div className="relative w-full max-w-sm">
                      <img
                        src={"src/assets/icon/search-01.svg"}
                        alt="Ícone"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                      />
                      <Input id="search"
                      placeholder="Pesquisar"
                      className="pl-10 pr-4 py-2 w-full border-gray-300 placeholder:text-gray-400"
                      {...register("search")}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <div className="relative w-full max-w-sm">
                      <Select>
                        <SelectTrigger className=" flex flex-1 w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="pl-10 pr-4 py-2 w-full placeholder:text-gray-400 border-none">
                            <SelectItem value="Anunciado">Anunciado</SelectItem>
                            <SelectItem value="Vendido">Vendido</SelectItem>
                            <SelectItem value="Cancelado">Cancelado</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>




              </CardContent>
              <CardFooter className='mt-9 grid w-full !items-center gap-4 mt-10'>
                <Button
                className="bg-orange-500 !text-white justify-center items-center text-action-md-size p-6 max-w-sm"
                type="submit"
                >
                  Aplicar
                </Button>
              </CardFooter>
            </form>

          </Card>
        </div>

        <div className="grid grid-cols-[1fr_1fr]  gap-10">
          <ProductCard tags={['popular', 'time']} />
          <ProductCard tags={['popular', 'time']} />
          <ProductCard tags={['popular', 'time']} />

        </div>

      </div>
    </div>
    )
}

