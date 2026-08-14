import { useMemo, useState } from "react";

export function useSearchQuery(initialValue = "") {
  const [search, setSearch] = useState(initialValue);

  const clearSearch = () => setSearch("");

  return { search, setSearch, clearSearch };
}

export function useFilteredProducts(products, searchTerm) {
  return useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return products;

    return products.filter((product) => {
      const name = product.name.toLowerCase();
      const brand = product.brand.toLowerCase();
      const category = product.category.toLowerCase();

      return (
        name.includes(query) ||
        brand.includes(query) ||
        category === query
      );
    });
  }, [products, searchTerm]);
}
