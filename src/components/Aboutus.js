import User from "./User";
import Userclass from "./Userclass";
const Aboutus = () => {
    return (  
        
            <div className="aboutus">
                <h1>About Us</h1>
                <p>This is Rumi's Restaurant. We serve the best food in town. Our mission is to provide delicious food to our customers at an affordable price. We believe in quality and customer satisfaction. Our team is dedicated to making your dining experience memorable. Thank you for choosing Rumi's Restaurant!</p>    
                <User name={"Dumi"}/>
                <Userclass name={"Rumi"}/>
            </div>
        
    );
}
export default Aboutus;