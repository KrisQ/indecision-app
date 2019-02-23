
const app = {
  title: "🥐 🇫🇷 🚀",
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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
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
      <button disabled={app.options.length < 1} onClick={onMakeDecision}>What Should I Do</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
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
