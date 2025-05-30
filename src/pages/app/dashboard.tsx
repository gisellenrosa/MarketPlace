import { getSoldProducts, getViews } from "@/api/metrics";
import { getAllProducts } from "@/api/products";
import { LineChartComponent } from "@/components/recharts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

export function Dashboard()  {


const { data: quantitySoldProducts } = useQuery({
  queryKey: ['soldProducts'],
  queryFn: () => getSoldProducts(),

})

const { data: views } = useQuery({
  queryKey: ['views'],
  queryFn: () => getViews(),

})
const { data: allProducts } = useQuery({
  queryKey: ['allProducts'],
  queryFn: () => getAllProducts(),

})


console.log(views)
console.log(quantitySoldProducts)
console.log(allProducts?.products?.length)



const data = [
  {
    id: 1,
    imgSrc: "src/assets/icon/sale-tag-02.svg",
    quantity: quantitySoldProducts?.amount ?? 0,
    text: "Produtos vendidos",
  },
  {
    id: 2,
    imgSrc: "src/assets/icon/store-04.svg",
    quantity:allProducts?.products?.length ?? 0,
    text: "Produtos anunciados",
  },
  {
    id: 3,
    imgSrc: "src/assets/icon/user-multiple.svg",
    quantity: views?.amount ?? 0,
    text: "Pessoas visitantes",
  },
]

  return (
    <div className="px-20 ">
      <h1 className="text-2xl font-bold">Últimos 30 dias</h1>
      <p className="text-md  text-gray-500">Confira as estatísticas da sua loja no ultimo mês</p>
      <div className="grid grid-cols-[1fr_3fr] gap-10 mt-10 ">
        <div className="flex flex-col gap-10">
          {data.map((item) => {
            return (
              <Card className="rounded-4xl">
                <CardContent className="flex font-dm-sans text-sm">
                  <div className="" key={item.id}>
                    <img
                      src={item.imgSrc}
                      alt="Ícone"
                      className="p-2 bg-background-secondary rounded-3xl h-40 w-40"
                    />
                  </div>
                  <div className="ml-5 mt-5 flex flex-col gap-3">
                    <CardTitle className="text-3xl  font-bold">{item.quantity}</CardTitle>
                    <p className="text-md  text-gray-500 ">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          )}
        </div>
        <Card className="rounded-4xl">
          <CardTitle className="text-lg px-10">Visitantes</CardTitle>
          <LineChartComponent/>
        </Card>

      </div>
    </div>
    )
}

