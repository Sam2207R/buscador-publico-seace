import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface FavoriteItem {
  id: number;
  idec: string;
  code: string;
  entity: string;
  description: string;
  object: string;
  cubso?: string;
  stages: string[];
  publicationDate: string;
  status: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: number) => boolean;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  removeFavorite: () => {},
});

const STORAGE_KEY = 'seace_lista_interes';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const isFavorite = (id: number) => favorites.some(f => f.id === id);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites(prev =>
      prev.some(f => f.id === item.id)
        ? prev.filter(f => f.id !== item.id)
        : [...prev, item]
    );
  };

  const removeFavorite = (id: number) =>
    setFavorites(prev => prev.filter(f => f.id !== id));

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
