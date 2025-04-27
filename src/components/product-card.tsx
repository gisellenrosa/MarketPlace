import { Badge } from './ui/badge';
import { Card, CardDescription, CardTitle } from './ui/card';

interface ProductCardProps {
  srcValue?: string;
  altValue?: string;
  descriptionText?: string;
  priceValue?: string;
  titleText?: string;
  tags?: string[];
}

export function ProductCard({srcValue, altValue, tags, priceValue, titleText, descriptionText}: ProductCardProps) {
  return (
    <Card className='rounded-4xl'>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row gap-2 relative">
          <div className="absolute end-0 top-0 pr-2">
            {tags && tags.map((tag, index) => (
              <Badge
                key={index}
                className="text-sm bg-gray-500 px-2 py-1 m-1.5 p-4 rounded-3xl"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <img
            src={srcValue}
            alt={altValue}
            className="bg-background-secondary w-full h-80 rounded-4xl"
          />
       </div>

        <div className="ml-5 mt-5 flex justify-between gap-3">
          <CardTitle className="text-3xl font-bold text-gray-400">{titleText}Venda</CardTitle>
          <CardTitle className="text-3xl font-bold text-gray-500"><span className='text-lg'>{`R$ `}</span>{priceValue}1200</CardTitle>
        </div>
        <div className="ml-5 mt-2 flex flex-col gap-3">
          <CardDescription className="text-2xl">{descriptionText} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, facilis rem! Expedita, eos, minima atque neque repudiandae modi eaque amet at iusto quisquam laudantium ipsum! Facere quidem quis porro beatae.</CardDescription>
        </div>
      </div>
    </Card>
  );
}

