console.log("Works");

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascrip XML

const app = {
  title: "John",
  subtitle: "This is JSX from app.js"
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
  </div>
);

const user = {
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

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
