import { Card, CardContent, CardTitle } from "@/components/ui/card"


export function Dashboard()  {
  return (
    <div className="px-20 ">
      <h1 className="text-2xl font-bold">Últimos 30 dias</h1>
      <p className="text-md  text-gray-500">Confira as estatísticas da sua loja no ultimo mês</p>
      <div className="grid grid-cols-[1fr_3fr] gap-10 mt-10 ">
        <div className="flex flex-col gap-10">
          <Card className="rounded-4xl">
            <CardContent className="flex font-dm-sans text-sm">
              <div className="">
                <img
                  src={"src/assets/icon/sale-tag-02.svg"}
                  alt="Ícone"
                  className="p-2 bg-background-secondary rounded-3xl h-40 w-40"
                />
              </div>
              <div className="ml-5 mt-5 flex flex-col gap-3">
                <CardTitle className="text-3xl  font-bold">24</CardTitle>
                <p className="text-md  text-gray-500 ">Produtos vendidos</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-4xl">
            <CardContent className="flex font-dm-sans text-sm">
                <div className="">
                  <img
                    src={"src/assets/icon/store-04.svg"}
                    alt="Ícone"
                    className="p-2 bg-background-secondary rounded-3xl h-40 w-40"
                  />
                </div>
                <div className="ml-5 mt-5 flex flex-col gap-3">
                  <CardTitle className="text-3xl  font-bold">56</CardTitle>
                  <p className="text-md  text-gray-500 ">Produtos anunciados</p>
                </div>
              </CardContent>
          </Card>
          <Card className="rounded-4xl">
            <CardContent className="flex font-dm-sans text-sm">
                <div className="">
                  <img
                    src={"src/assets/icon/user-multiple.svg"}
                    alt="Ícone"
                    className="p-2 bg-background-secondary rounded-3xl h-40 w-40"
                  />
                </div>
                <div className="ml-5 mt-5 flex flex-col gap-3">
                  <CardTitle className="text-3xl  font-bold">1.238</CardTitle>
                  <p className="text-md  text-gray-500 ">Pessoas visitantes</p>
                </div>
              </CardContent>
          </Card>
        </div>
        <Card className="rounded-4xl">
          <CardTitle className="text-lg px-10">Visitantes</CardTitle>
        </Card>

      </div>
    </div>
    )
}

