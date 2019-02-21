"use strict";

console.log("Works");

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascrip XML

var app = {
  title: "John",
  subtitle: "This is JSX from app.js"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "1"
    ),
    React.createElement(
      "li",
      null,
      "2"
    ),
    React.createElement(
      "li",
      null,
      "3"
    )
  )
);

var user = {
  name: "Chris",
  age: 26,
  location: "New Orleans 🎉"
};

function getLocation(location) {
  if (location) {
    return location;
  }
  return "Unknown 😕";
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    getLocation(user.location)
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
