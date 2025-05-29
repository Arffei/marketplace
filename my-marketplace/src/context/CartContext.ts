// src/context/CartContext.ts
import React from 'react';
import { Product } from '../types/Product';

type Action =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string };

interface State {
  items: Record<string, number>; // id => quantity
}

const initialState: State = { items: {} };

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: (state.items[action.payload.id] || 0) + 1,
        },
      };
    case 'REMOVE_FROM_CART':
      const newItems = { ...state.items };
      delete newItems[action.payload];
      return { ...state, items: newItems };
    default:
      throw new Error();
  }
};

export const CartContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => null,
]);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
  );
}