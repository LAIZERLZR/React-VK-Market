import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Item } from '../types/types';

export const fetchProducts = createAsyncThunk<Item[]>(
    'api/fetchProducts',
    async () => {
      const response = await axios.get<Item[]>('https://fakestoreapi.com/products')
      return response.data
    }
  )
