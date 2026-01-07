const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restaurant-logo"
      />
      <h4>{name}</h4>
      <h5>
        {avgRating}⭐ | {sla.slaString} | {costForTwo}
      </h5>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};
export default RestaurantCard;
