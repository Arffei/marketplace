import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
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

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if(newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);