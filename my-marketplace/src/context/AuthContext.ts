import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types/user';

// Тип контекста аутентификации
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Создание контекста аутентификации
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер контекста аутентификации
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Загрузка данных пользователя из localStorage при загрузке страницы
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Временно закомментируем этот код
  // return (
  //   <AuthContext.Provider value={{ user, login, logout }}>
  //     {children}
  //   </AuthContext.Provider>
  // );
};

// Экспорт контекста для использования в компонентах
export default AuthContext;