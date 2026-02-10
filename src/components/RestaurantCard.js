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
      <h4 className="font-semibold mx-2 my-4 font-Gilory">{name}</h4>
      <h5 className="m-2 font-normal text-sm">
        {avgRating}⭐ | {sla.slaString} | {costForTwo}
      </h5>
      <p className="m-1 text-gray-700 text-sm">{cuisines.join(", ")}</p>
    </div>
  );
};
export default RestaurantCard;
