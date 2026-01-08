import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-Container">
        {
          /* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />*/
          listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
