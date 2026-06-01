import {
  createContext,
  useContext,
  useState,
} from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {

    const exists = favorites.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setFavorites(
        favorites.filter((item) => item.id !== product.id)
      );
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);