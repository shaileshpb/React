import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    return (
        <div className="restaurantCard" onClick={()=> {
            console.log("Restaurant ID: ", props.ID);
            
        }}>
            <img 
                className="restaurantImage"
                src={
                    props.img === "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
                        ? "https://media.tenor.com/yfaFcsYBgqMAAAAj/loading-gif.gif"
                        : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.img
                }
            />
            <h3>{props.restName}</h3>
            <h4>{props.foodItem}</h4>
            <h4>Ratings: {props.restRating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;