import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

var roomDomElement = document.getElementById("root");

var root = ReactDOM.createRoot(roomDomElement);

// const reactHeadingElement = React.createElement("h1", {}, "Hello from JSX!");
// const reactSecondHeadingElement = React.createElement(
//   "h2",
//   {},
//   "Second heading test for JSX!"
// );
// const header = React.createElement(
//   'header',
//   { className: 'site-header' },
//   reactHeadingElement,
//   reactSecondHeadingElement
// );

var headerJSX = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX!"
    ),
    React.createElement(
        "h2",
        null,
        "Second heading from JSX!"
    )
);

root.render(headerJSX);