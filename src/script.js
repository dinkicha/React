import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const roomDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(roomDomElement);

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

const headerJSX = (
<header className="site-header">
    <h1>Hello from JSX!</h1>
    <h2>Second heading from JSX!</h2>
</header>
);

root.render(headerJSX);

