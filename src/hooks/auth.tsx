import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_id?: string;
  avatar?: {
    id: string;
    name: string;
    path: string;
    url: string;
    updated_at: string;
    created_at: string;
  };
  avatarUrl: string;
  updated_at: string;
  created_at: string;
}

interface IAuthContext {
  user: User;
  signIn(id: string): Promise<void>;
  signOut(): Promise<void>;
}

interface IAuthProvider {
  children?: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<User>({} as User);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@Ligeirinho:user');

      if (user) {
        setData(JSON.parse(user));
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async (id: string) => {
    const response = await api.get<User>(`/deliverymen/${id}`);

    const user = response.data;

    user.avatarUrl =
      user.avatar?.url ||
      `https://api.adorable.io/avatars/136/${user.name}.png`;

    await AsyncStorage.setItem('@Ligeirinho:user', JSON.stringify(user));

    setData(user);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Ligeirinho:user');

    setData({} as User);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth precisa esta dentro do AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
