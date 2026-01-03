import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "h2",
  { id: "firstHeading" },
  "What is Your Name"
);

const Heading = () => {
  return (<div>
    <h1>Hello World</h1>
  </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
