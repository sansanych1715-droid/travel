import { createContext, useContext, useState, type ReactNode } from "react";
import type { Tour } from "@/shared/api/types";

type CartItem = {
  item: Tour;
  count: number;
};
type CartType = {
  cart: CartItem[];
  addToCart: (tour: Tour) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: (id: number) => void;
};

export const CartContext = createContext<CartType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(tour: Tour) {
    setCart((prev) => {
      const res = prev.find((item) => item.item.id === tour.id);

      if (res) {
        return prev.map((item) =>
          item.item.id === tour.id ? { ...item, count: item.count + 1 } : item,
        );
      }

      return [...prev, { item: tour, count: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) =>
      prev
        .map((el) => (el.item.id === id ? { ...el, count: el.count - 1 } : el))
        .filter((el) => el.count > 0),
    );
  }
  function removeAllFromCart(id: number) {
    setCart((prev) =>
      prev
        .map((el) => (el.item.id === id ? { ...el, count: 0 } : el))
        .filter((el) => el.count > 0),
    );
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
