import { RootState } from '../store';

export const getCartProducts = (state: RootState) => state.cartSlice.items;
