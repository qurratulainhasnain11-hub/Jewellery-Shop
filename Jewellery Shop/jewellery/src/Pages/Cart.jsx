import React, { useEffect, useState } from "react";
import { getCart, deleteCartItem, updateCartItem } from "../services/api";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // for navigation
import "../Styling/cartPage.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCart = async () => {
    const data = await getCart();
    setCartItems(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const changeQuantity = async (id, qty) => {
    if (qty < 1) return;
    await updateCartItem(id, qty);
    fetchCart();
  };

  const removeItem = async (id) => {
    await deleteCartItem(id);
    fetchCart();
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item?.productPrice || 0) * (item?.quantity || 0),
    0,
  );

  const proceedToCheckout = () => {
    if (cartItems.length === 0) return; // extra safety
    navigate("/checkout"); // redirect to checkout page
  };

  return (
    <section className="cart">
      <h2>
        <FiShoppingCart /> Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="list">
            {cartItems.map((item) => (
              <div key={item.id} className="item">
                <div className="info">
                  <h4>{item.productName}</h4>
                  <p>PKR {item.productPrice}</p>
                </div>
                <div className="actions">
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)}>✕</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h3>Total: PKR {total}</h3>
            <button
              className="checkout-btn"
              onClick={proceedToCheckout}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
