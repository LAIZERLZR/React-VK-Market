import { RootState } from '../store';

export const getTotalSummary = (state: RootState) => state.cartSlice.totalPrice;
