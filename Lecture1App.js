const rootReact = ReactDOM.createRoot(document.getElementById("root"));   
/*const headingReact = React.createElement(
    "h1", 
    {id: "heading"}, // attributes
    "Hello world from React" // children
);
rootReact.render(headingReact);
*/

/*creating hierarchy of UI elements in react 
<div id="parent">
    <div id="child">
        <h1>Hello world from React</h1>
    </div>
</div>
*/

/*
const h1react = React.createElement("h1", {id: "heading"}, "Hello world from React Hierarchy");
const childReact = React.createElement("div", {id: "child"}, h1react);
const parentReact = React.createElement("div", {id: "parent"}, childReact)
rootReact.render(parentReact);
*/

const parentReact = React.createElement(
    "div",
    {id: "parent", },
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {id: "heading"}, "Hello world from React Hierarchy"),
            React.createElement("h2", {id: "subheading"}, "This is a subheading"),
        ]
    )
)
rootReact.render(parentReact);