import { useEffect, useState } from "react";
import "./App.css";
import ProductItems from "./components/ProductItems";

export type FakeStore = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function App() {
  const [products, setProducts] = useState<FakeStore[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-stone-800">
      <h1 className=" font-semibold text-white text-5xl">Willkommen</h1>
      <ul className="grid grid-cols-3 gap-4">
        {products.map((productItem) => (
          <ProductItems key={crypto.randomUUID()} product={productItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
