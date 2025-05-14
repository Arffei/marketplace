export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface User {
  email: string;
  name: string;
  orders: Order[];
}

export interface Order {
  id: number;
  products: Product[];
  total: number;
  date: string;
}