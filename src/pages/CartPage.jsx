import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleIncrease = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p className="total">Total Items: {totalQuantity}</p>

      {items.length === 0 ? (
        <p className="cartStatus">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price} each</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn-delete"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
            <div className="cart-actions">
              <Link to="/products" className="btn-secondary">
                Continue Shopping
              </Link>
              <button
                onClick={() => alert("Coming Soon!")}
                className="btn-primary"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
