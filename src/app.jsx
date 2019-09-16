import React from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";

//css
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      checkNumber: ""
    };
  }

  //increament
  handleButtonClick = e => {
    e.preventDefault();
    if (this.state.counter + 1 > 0) {
      this.setState({
        counter: this.state.counter + 1,
        checkNumber: "positive"
      });
    } else if (this.state.counter + 1 < 0) {
      this.setState({
        counter: this.state.counter + 1,
        checkNumber: "negative"
      });
    } else if (this.state.counter + 1 === 0) {
      this.setState({ counter: this.state.counter + 1, checkNumber: "zero" });
    }
  };

  //decreament
  handleButtonClick2 = e => {
    e.preventDefault();
    if (this.state.counter - 1 > 0) {
      this.setState({
        counter: this.state.counter - 1,
        checkNumber: "positive"
      });
    } else if (this.state.counter - 1 < 0) {
      this.setState({
        counter: this.state.counter - 1,
        checkNumber: "negative"
      });
    } else if (this.state.counter - 1 === 0) {
      this.setState({ counter: this.state.counter - 1, checkNumber: "zero" });
    }
  };

  render() {
    return (
      <div>
        <h4 className={this.state.checkNumber}>{this.state.counter}</h4>
        <button onClick={this.handleButtonClick}>Click Me to Increament</button>
        <button onClick={this.handleButtonClick2}>
          Click Me to Decreament
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
