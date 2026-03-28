import axios from "axios";

const API = "http://localhost:3000";

export const getAllProducts = async () => {
  const res = await axios.get(`${API}/products`);
  return res.data;
};

export const addToCart = async (productId, quantity = 1) => {
  await axios.post(`${API}/cart`, { productId, quantity });
};

export const getCart = async () => {
  const res = await axios.get(`${API}/cart`);
  return res.data;
};

export const deleteCartItem = async (id) => {
  await axios.delete(`${API}/cart/${id}`);
};

export const updateCartItem = async (id, quantity) => {
  await axios.put(`${API}/cart/${id}`, { quantity });
};
export const getFeaturedProducts = async () => {
  const res = await axios.get(`${API}/products/featured`);
  return res.data;
};


export const checkout = async (customerName, customerAddress, cartItems) => {
  const body = {
    customerName,
    customerAddress,
    items: cartItems.map((item) => ({
      productId: item.id,
      productName: item.productName,
      productPrice: item.productPrice,
      quantity: item.quantity,
    })),
  };

  const res = await axios.post(`${API}/orders`, body);
  return res.data;
};
