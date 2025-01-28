import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p className="price">${plant.price}</p>
      <button 
        onClick={handleAddToCart}
        disabled={isInCart}
        className={isInCart ? 'btn-disabled' : 'btn-primary'}
      >
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;