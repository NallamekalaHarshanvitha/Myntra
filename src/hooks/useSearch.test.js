import { renderHook, act } from "@testing-library/react";
import { useSearchQuery, useFilteredProducts } from "./useSearch";
import products from "../data/products";

describe("useSearchQuery", () => {
  it("updates and clears the search term", () => {
    const { result } = renderHook(() => useSearchQuery("initial"));

    expect(result.current.search).toBe("initial");

    act(() => {
      result.current.setSearch("nike");
    });

    expect(result.current.search).toBe("nike");

    act(() => {
      result.current.clearSearch();
    });

    expect(result.current.search).toBe("");
  });
});

describe("useFilteredProducts", () => {
  it("filters products by name, brand, or category", () => {
    const { result } = renderHook(() => useFilteredProducts(products, "nike"));

    expect(result.current).toEqual(
      expect.arrayContaining([expect.objectContaining({ brand: "Nike" })])
    );
    expect(result.current).toHaveLength(1);
  });
});
