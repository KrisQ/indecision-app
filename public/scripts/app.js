"use strict";

console.log("Works");

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascrip XML

var app = {
  title: "John",
  subtitle: "This is JSX from app.js",
  options: ['One', 'Two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No Options"
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
  name: "Kristenn",
  age: 26,
  location: "New Orleans 🎉"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'No Name'
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
