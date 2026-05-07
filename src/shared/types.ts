export interface Tour {
  id: number;
  title: string;
  img: string;
  price: number;
}

export type CartItem = {
  item: Tour;
  count: number;
};
export type CartType = {
  cart: CartItem[];
  addToCart: (tour: Tour) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: (id: number) => void;
};

export type CartState = {
  cart: CartItem[];
};
