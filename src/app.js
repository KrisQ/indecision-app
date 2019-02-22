// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - Javascrip XML

const app = {
  title: "John",
  subtitle: "This is JSX from app.js",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No Options</p>
      )}
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => <li key={index}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");

  ReactDOM.render(template, appRoot);
};

renderApp();
