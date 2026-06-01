const BASE_URL = "http://localhost:3000/products";

export const getAllProducts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
};