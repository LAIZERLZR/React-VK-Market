import { RootState } from '../store';

export const getProductLoader = (state: RootState) => state.cartSlice.loading;
