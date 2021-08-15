const FoodCard = (props) => {
  const { foodItem, addToCart } = props;
  const { name, description, price, img } = foodItem;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="Food" />
      </div>
      <div className="card-content-container">
        <div className="food-name">{name}</div>
        <div className="food-decription">{description}</div>
        <div className="food-price">{price}</div>
      </div>
      <div className="card-btn">
        <button
        // onClick={() => addToCart(foodItem)}
        >
          buy
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
