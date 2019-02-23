class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visible: true
    };
  }
  handleVisibility() {
    this.setState(prevState => {
      if (prevState.visible) {
        return {
          visible: false
        };
      } else {
        return {
          visible: true
        };
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visible ? "Hide Text" : "Show Text"}
        </button>
        <div>{this.state.visible && <p>Is this visible?</p>}</div>
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById("app"));
