import React, { useEffect, useMemo, useState } from "react";
import { getCart, checkout } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../Styling/checkoutPage.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getCart();
        setCartItems(items);
      } catch {
        setError("Failed to load cart.");
      }
    };
    fetchCart();
  }, []);

  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + (item?.productPrice || 0) * (item?.quantity || 0),
        0,
      ),
    [cartItems],
  );

  const placeOrder = async (e) => {
    e.preventDefault();

    if (!name || !address) {
      setError("Enter your name and address");
      return;
    }

    if (!cartItems.length) {
      setError("Your cart is empty.");
      return;
    }

    try {
      await checkout(name, address, cartItems);
      alert("Order placed successfully!");
      navigate("/");
    } catch (err) {
      console.log("error occured..");
    }
  };

  return (
    <section className="checkout">
      <h2>Checkout</h2>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="item">
            <span>
              {item.productName} x {item.quantity}
            </span>
            <span>PKR {item.productPrice * item.quantity}</span>
          </div>
        ))}
        <h3>Total: PKR {total}</h3>
      </div>

      <form className="checkout-form" onSubmit={placeOrder}>
        <h3>Customer Details</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default Checkout;
