import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Body from "./components/Body";
import Notfound from "./components/Notfound";
import Menu from "./components/Menu";


const rootReact = ReactDOM.createRoot(document.getElementById("root"));  
const AppLayout = () => {
    return (    
        <div className="ap">
            <Header/>
            <Outlet/>
        </div>
    )
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:   [
            {
                path: "/", 
                element: <Body />
            },
            {
                path: "/about", 
                element: <Aboutus />
            },
            {
                path:"/menu/:ID",
                element: <Menu />
            }
        ],
        errorElement: <Notfound />
    }
]);
rootReact.render(<RouterProvider router={appRouter} />);