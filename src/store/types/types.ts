export interface ItemRating {
  rate: number;
  count: number;
}

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ItemRating;
  amount: number;
  checked: boolean;
}

export interface CartState {
  totalPrice: number;
  items: Item[];
  loading: boolean;
}

export interface ApiState {
  products: Item[];
  loading: boolean;
}

export {};
