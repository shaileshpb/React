import React from "react";
import ReactDOM from "react-dom/client";

const rootReact = ReactDOM.createRoot(document.getElementById("root"));   
const heading = React.createElement("H1", {id: "heading"}, "Hello world from React");
const headingJXS = <h1 id="headingJXS">Hello world from React JXS</h1>;
rootReact.render(headingJXS);

