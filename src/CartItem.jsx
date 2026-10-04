import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => {
        const numericCost = parseFloat(item.cost.replace("$", "")) || 0;
        return total + numericCost * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculate total number of items
  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace("$", "")) || 0;
    return (numericCost * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 }),
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert("Functionality to be added for future reference: Coming Soon!");
  };

  return (
    <div
      className="cart-container"
      style={{ padding: "30px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#2e7d32",
          marginBottom: "10px",
        }}
      >
        Your Shopping Cart
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#555",
          marginBottom: "24px",
        }}
      >
        Total Plants in Cart: <strong>{calculateTotalItems()}</strong> | Total
        Cost: <strong>${calculateTotalAmount()}</strong>
      </p>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "18px", color: "#777", marginBottom: "20px" }}>
            Your cart is currently empty.
          </p>
          <button
            onClick={(e) => onContinueShopping(e)}
            style={{
              padding: "12px 28px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="cart-item"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                padding: "16px",
                borderRadius: "10px",
                marginBottom: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                gap: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#1b5e20",
                    marginBottom: "4px",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: "15px", color: "#666" }}>
                  Unit Price: {item.cost}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  Subtotal: ${calculateTotalCost(item)}
                </p>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  onClick={() => handleDecrement(item)}
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#e0e0e0",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    minWidth: "24px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrement(item)}
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#e0e0e0",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item)}
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#e53935",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Delete
              </button>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <button
              onClick={(e) => onContinueShopping(e)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#757575",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Continue Shopping
            </button>
            <button
              onClick={(e) => handleCheckoutShopping(e)}
              style={{
                padding: "12px 30px",
                backgroundColor: "#2e7d32",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
