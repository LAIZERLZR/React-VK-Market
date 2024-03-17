import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Item } from '../types/types';
import { fetchProducts } from '../api/productApi';

const initialState: CartState = {
  totalPrice: 0,
  items: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<number>) {
      state.items[payload].amount++;
      calculateTheCost(state);
    },
    minusItem(state, { payload }: PayloadAction<number>) {
      state.items[payload].amount--;
      calculateTheCost(state);
    },
    removeItem(state, { payload }: PayloadAction<number>) {
      if (payload !== -1) {
        state.items.splice(payload, 1);
        calculateTheCost(state);
      }
    },
    checkItem(state, { payload }: PayloadAction<number>) {
      state.items[payload].checked = !state.items[payload].checked;
      calculateTheCost(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }: PayloadAction<Item[]>) => {
        state.loading = false;
        const res = payload.map((item) => ({ ...item, amount: 1, checked: true }));
        state.items = res;
        calculateTheCost(state);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

const calculateTheCost = (state: CartState) => {
  state.totalPrice = state.items.reduce((total, item) => {
    if (item.checked) {
      return Math.round(total + item.price * item.amount);
    }
    return total;
  }, 0);
};

export const { addItem, removeItem, minusItem, checkItem } = cartSlice.actions;
export default cartSlice.reducer;
