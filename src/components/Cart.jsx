import React, { useState } from "react";

export default function Cart({ cart, remove, updateQty }) {
  const [open, setOpen] = useState(false);
  const total = cart.reduce((s, p) => s + (parseFloat(p.price_raw || p.price) * p.qty), 0);

  return (
    <>
      <button className="open-cart" onClick={() => setOpen(true)}>
        Open Cart ({cart.reduce((s, c) => s + c.qty, 0)})
      </button>

      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button onClick={() => setOpen(false)} className="ghost-btn">Close</button>
        </div>

        <div className="cart-list">
          {cart.length === 0 && <div className="empty">Your cart is empty</div>}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="ci-body">
                <strong>{item.name}</strong>

                <div className="ci-meta">
                  <div>₹{(parseFloat(item.price_raw || item.price) * item.qty).toFixed(0)}</div>

                  <div className="qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                    <span style={{ margin: "0 8px" }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                </div>

                <button className="link" onClick={() => remove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="total">Total: ₹{total.toFixed(0)}</div>
          <button className="primary-btn">Checkout</button>
        </div>
      </aside>
    </>
  );
}
