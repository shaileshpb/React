import foodLogo from "./foodlogo.png";
import React from "react";
import ReactDOM from "react-dom/client";


const rootReact = ReactDOM.createRoot(document.getElementById("root"));  

/**
 * Building food ordering app
 * Header component
 *  * Logo
 *  * Nav items
 * Body component
 *  * Search
 *  * Restaurant container 
 *   * Resetaurant card
 * Footer component
 *  * Links
 *  * Copyright
 * 
 */

const AppLayout = () => {
    return (    
        <div className="ap">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
};

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img 
                    className="logo"
                    src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
                />  
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul> 
            </div>
        </div>
    )
};

// const BodyComponent = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="restaurantContainer">
//                 <RestaurantCard restName="Meghna Food" foodItem="Burger"/>
//                 <RestaurantCard restName="KFC" foodItem="Chicken"/>
//                 <RestaurantCard restName="Mac D Food" foodItem="Pizza"/>
//                 <RestaurantCard restName="TMC" foodItem="Coffee"/>
//                 <RestaurantCard restName="Empire" foodItem="Sugar"/>
//                 <RestaurantCard restName="XYZ" foodItem="ZYA"/>
//             </div>
//         </div>
//     )
// }

const containerList = [
    { key: "1", restName: "Meghna Food", foodItem: "Burger"},
    { key: "2", restName: "KFC", foodItem: "Chicken"},
    { key: "3", restName: "Mac D Food", foodItem: "Pizza"},
    { key: "4", restName: "TMC", foodItem: "Coffee"},
    { key: "5", restName: "Empire", foodItem: "Sugar"},
    { key: "6", restName: "XYZ", foodItem: "ZYA"}
]
const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurantContainer">
                {
                    containerList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.key} restName={restaurant.restName} foodItem={restaurant.foodItem}/>
                    })
                }
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="restaurantCard">
            <img 
                className="restaurantImage"
                src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg"
            />
            <h3>{props.restName}</h3>
            <h4>{props.foodItem}</h4>
            <h4>Ratings</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

rootReact.render(<AppLayout />);