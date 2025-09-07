import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.js";
//import containerList from "../utils/mockData.js";
import { useEffect, useState } from "react";

const Body = () => {
    // state variable: Hook 
    // useState() hook 
    let containerList = [
        {
            info: {
                id: 1,
                name: "-------",
                cuisines: "-------",
                avgRating: "-------",
                cloudinaryImageId: "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
            }

        },
        {
            info: {
                id: 2,
                name: "-------",
                cuisines: "-------",
                avgRating: "-------",
                cloudinaryImageId: "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
            }
        },
        {
            info: {
                id: 3,
                name: "-------",
                cuisines: "-------",
                avgRating: "-------",
                cloudinaryImageId: "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
            }
        },
        {
            info: {
                id: 4,
                name: "-------",
                cuisines: "-------",
                avgRating: "-------",
                cloudinaryImageId: "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
            }
        },
        {
            info: {
                id: 5,
                name: "-------",
                cuisines: "-------",
                avgRating: "-------",
                cloudinaryImageId: "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
            }
        }
    ];
    const [allRestaurants, setAllRestaurants] = useState(containerList);
        //
        let [listOfRestaurants, setListOfRestaurants] = useState(containerList);
    // useEffect() hook
        useEffect(() => {
            loadData();

        }, []);

        const loadData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    
    return (
        <div className="body">
            <div>
                <input 
                    className="search border border-black p-2 m-2" 
                    type="text" 
                    placeholder="Search"
                    onChange={(e) => {
                        e.target.value
                        setListOfRestaurants(
                            allRestaurants.filter(
                                (restaurant) => restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                            )
                        );
                    }}
                />
            </div>
            <div className="filter">
                <button className="filterBtn" onClick={()=> {
                    setListOfRestaurants(
                        listOfRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating > 4.5
                        )
                    );
                }}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="flex flex-wrap">
                {
                    listOfRestaurants.map((restaurant) => {
                        return (
                        <Link to={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard key={restaurant.info.id} ID={restaurant.info.id} 
                            restRating={restaurant.info.avgRating} img={restaurant.info.cloudinaryImageId} 
                            restName={restaurant.info.name} foodItem={restaurant.info.cuisines}/>
                        </Link>
                    )
                    })
                }
            </div>
        </div>
    )
}
export default Body;