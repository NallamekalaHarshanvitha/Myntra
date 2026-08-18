import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist, toggleWishlistItem, clearWishlist } from '../features/wishlist/wishlistSlice';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  return {
    items,
    add: (product) => dispatch(addToWishlist(product)),
    remove: (id) => dispatch(removeFromWishlist(id)),
    toggle: (product) => dispatch(toggleWishlistItem(product)),
    isInWishlist: (id) => items.some((product) => product.id === id),
    clear: () => dispatch(clearWishlist()),
  };
};
