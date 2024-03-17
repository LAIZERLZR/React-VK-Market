import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartSlice from './slice/cart.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootReducer = combineReducers({
  cartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
