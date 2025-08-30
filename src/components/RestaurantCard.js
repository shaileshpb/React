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

export default RestaurantCard;