import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Dish 1</li>
        <li>Dish 2</li>
        <li>Dish 3</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
