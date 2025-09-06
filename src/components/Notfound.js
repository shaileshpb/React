import { use } from "react";
import { useRouteError } from "react-router-dom";
const Notfound = () => {
    const err = useRouteError();
    return (    
        <div className="notfound">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
            <h1>{err.status}</h1>
        </div>
    );
}
export default Notfound;