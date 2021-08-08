const FoodCard = (menuData) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={menuData.img} alt="" />
      </div>
      <div className="card-content-container">
        <div className="food-name">{menuData.name}</div>
        <div className="food-decription">{menuData.description}</div>
        <div className="food-price">{menuData.price}</div>
      </div>
      <div className="card-btn">
        <a href="/buy">Buy</a>
      </div>
    </div>
  );
};

export default FoodCard;
