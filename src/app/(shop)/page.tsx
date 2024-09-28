import { MobileCategoriesButtons, ProductGrid, Title } from "@/components";

import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Shop() {
  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <MobileCategoriesButtons />
      <ProductGrid products={products} />
    </div>
  );
}
