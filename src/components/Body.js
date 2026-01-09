import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    //API Call
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     const json = await data.json();

  //     setListOfRestaurant(
  //       json?.data?.cards[1]?.card?.gridElements?.infoWithStyle?.restaurants
  //     );

  //     console.log(
  //       json?.data?.cards[1]?.card?.gridElements?.infoWithStyle?.restaurants
  //     );
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // json?.data?.cards?.forEach((card, index) => {
    //   const restaurants =
    //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //   if (restaurants) {
    //     console.log("✅ Restaurants found at index:", index);
    //     console.log("🍽️ Restaurants data:", restaurants);
    //   }
    // });
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );

    // const restaurantCard = json?.data?.cards?.find(
    //   (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // const restaurants =
    //   restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // // console.log(restaurants);

    // setListOfRestaurant(restaurants || []);
  };

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
