import { Card, CardContent } from "@/components/ui/card";

export function Products()  {

  return (
    <div className="px-20 ">
      <h1 className="text-2xl font-bold">Últimos 30 dias</h1>
      <p className="text-md  text-gray-500">Confira as estatísticas da sua loja no ultimo mês</p>
      <div className="grid grid-cols-[1fr_3fr] gap-10 mt-10 ">
        <div className="flex flex-col gap-10">

          <Card className="rounded-4xl">
            <CardContent className="flex font-dm-sans text-sm">

            </CardContent>
          </Card>
        </div>
        <Card className="rounded-4xl">
          <CardContent className="flex font-dm-sans text-sm">

          </CardContent>
        </Card>

      </div>
    </div>
    )
}

