import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from '../features/search/searchSlice';

export const useAppSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.term);

  return {
    search,
    setSearch: (value) => dispatch(setSearchTerm(value)),
    clearSearch: () => dispatch(clearSearchTerm()),
  };
};
