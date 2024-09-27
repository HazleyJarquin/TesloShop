import { ProductGrid, Title } from "@/components";
import { Gender } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

interface Props {
  params: {
    gender: Gender;
  };
}

const products = initialData.products;
export default function Category({ params }: Props) {
  const { gender } = params;

  // if (gender === "kids") {
  //   notFound();
  // }
  const filteredProducts = products.filter((p) => p.gender === gender);

  const label: Record<Gender, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  console.log(filteredProducts);
  return (
    <div>
      <Title
        title={`Articulos de ${label[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
