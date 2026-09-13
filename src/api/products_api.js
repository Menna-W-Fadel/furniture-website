const BASE_URL = "/products.json";

export const getAllProducts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("We couldn't load our products right now. Please try again later.");
  }

  return await response.json();
};