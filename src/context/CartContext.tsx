// context/CartContext.tsx
import { createContext, useContext, useState } from 'react';

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      return existing 
        ? prev.map(item => 
            item.productId === productId 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        : [...prev, { productId, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);