import React, { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('wishlist');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);

  const add = (product) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  const toggle = (product) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const isInWishlist = (id) => items.some((p) => p.id === id);

  const clear = () => setItems([]);

  return (
    <WishlistContext.Provider value={{ items, add, remove, toggle, isInWishlist, clear }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);

export default WishlistContext;
