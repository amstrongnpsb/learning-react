import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.setState({ count: 10 });
  }
  render() {
    return (
      <div className="w-full bg-slate-300 h-auto flex flex-row justify-center gap-5 text-xl font-bold ">
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button
          className="bg-green-500 w-20"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          className="bg-rose-500 w-20"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
