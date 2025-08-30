import RestaurantCard from "./RestaurantCard.js";
import containerList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
    // state variable: Hook 
    // useState() hook 
        //
        let [listOfRestaurants, setListOfRestaurants] = useState(containerList);
    // useEffect() hook
    return (
        <div className="body">
            <div className="filter">
                <button className="filterBtn" onClick={()=> {
                    setListOfRestaurants(
                        containerList.filter(
                            (restaurant) => restaurant.rating > 4
                        )
                    );
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurantContainer">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.key} restName={restaurant.restName} foodItem={restaurant.foodItem}/>
                    })
                }
            </div>
        </div>
    )
}
export default Body;