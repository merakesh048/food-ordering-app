import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(API_MENU + resId);
    const json = await data.json();
    console.log(json);
  };

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
