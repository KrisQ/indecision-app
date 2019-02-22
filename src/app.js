console.log("Works");

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascrip XML

const app = {
  title: "John",
  subtitle: "This is JSX from app.js",
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
  </div>
);

const user = {
  name: "Kristenn",
  age: 26,
  location: "New Orleans 🎉"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'No Name'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
