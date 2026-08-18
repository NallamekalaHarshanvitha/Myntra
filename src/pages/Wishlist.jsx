import React from 'react';
import { useWishlist } from '../hooks/useWishlist';

function Wishlist() {
  const { items, remove, clear } = useWishlist();

  if (!items || items.length === 0) return (
    <div style={{ padding: 24 }}>
      <h2>Your wishlist is empty</h2>
    </div>
  );

  return (
    <div style={{ padding: 24 }}>
      <h2>Your Wishlist</h2>
      <button onClick={clear} style={{ marginBottom: 12 }}>Clear Wishlist</button>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
            <img src={item.image} alt={item.name} style={{ width: 100, height: 100, objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <h3>{item.brand} - {item.name}</h3>
              <p>₹ {item.price}</p>
              <button onClick={() => remove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
