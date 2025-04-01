import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { FakeStore } from "../App";
import { HoverCardContent } from "./ui/hover-card";

type ProductItemsProps = {
  product: FakeStore;
};

const ProductItems = ({ product }: ProductItemsProps) => {
  return (
    <li className="grid row-span-4 justify-items-stretch content-evenly bg-white shadow shadow-stone-50 text-center">
      <img
        className="object-cover hover:shadow-2xl duration-300 shadow-stone-500 hover:outline  w-auto p-1 scale-75 transition-all hover:scale-90  inset-1 shadow  "
        src={product.image}
        alt="product-item"
      />
      <p className=" font-serif p-6  font-semibold">{product.title}</p>
      <span className=" font-bold ip-1">{product.price}€</span>
      <HoverCard>
        <HoverCardTrigger className=" transition-all duration-1000  shadow-stone-500 hover:underline hover:animate-pulse p-4 hover:text-lime-700 flex items-center justify-center font-extrabold m-4 text-blue-700 cursor-help ">
          Show more...
        </HoverCardTrigger>
        <HoverCardContent>{product.description}</HoverCardContent>
      </HoverCard>
    </li>
  );
};

export default ProductItems;
