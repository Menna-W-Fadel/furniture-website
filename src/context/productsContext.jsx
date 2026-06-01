import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getAllProducts } from "../api/products_api";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("");

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  useEffect(() => {
    let temp = [...products];

    // CATEGORY FILTER
    if (selectedCategory !== "All") {
      temp = temp.filter(
        (p) => p.category === selectedCategory
      );
    }

    // SEARCH
    if (searchTerm) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // SORT
    if (sort === "low") {
      temp.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(temp);

  }, [products, selectedCategory, searchTerm, sort]);

 
  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];


  const featuredProducts = products.slice(0, 6);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        featuredProducts,
        categories,

        loading,
        error,

        searchTerm,
        setSearchTerm,

        selectedCategory,
        setSelectedCategory,

        sort,
        setSort,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);