import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
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
