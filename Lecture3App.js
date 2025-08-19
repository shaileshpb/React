import React from "react";
import ReactDOM from "react-dom/client";

const rootReact = ReactDOM.createRoot(document.getElementById("root"));   
const heading = React.createElement("H1", {id: "heading"}, "Hello world from React");
const headingJXS = <h1 id="headingJXS" className="abcd">Hello world from React JXS</h1>;
//Babel converts this JSX code into React.createElement calls

//React element
const headingJXSsyntax2 = (
    <h1 id="headingJXS" className="abcd">
        Hello world from React element
    </h1>
);
rootReact.render(headingJXSsyntax2);

//React component
//Type1: Class based component: old way of writing components
//Type2: Functional component: new way of writing components

const HeadingComponent = () => {
    return (
        <h1 id="headingComponent" className="abcd">
            Hello world from React Component
        </h1>
    );
};

const xyz = "abc";
const AnotherHeadingComponent = () => {
    return (
        <div id="container">
            {headingJXSsyntax2}
            {xyz}
            <h2>{xyz}</h2>
            {HeadingComponent()}
            <HeadingComponent/>
            <h1 id="anotherHeadingComponent" className="abcd">
                Hello world from Another React Component
            </h1>
        </div>
    );
}

rootReact.render(<AnotherHeadingComponent />);

