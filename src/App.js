import React, {Component} from "react";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <button className="increment" 
        onClick={this.increment}>
          +
        </button>
        <button className="decrement"
         onClick={this.decrement}>-</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
