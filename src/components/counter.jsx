import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handeIncrement = e => {
    console.log(e);
    
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    var j=1;
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handeIncrement(j)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
