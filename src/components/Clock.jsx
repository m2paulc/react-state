/* 
Class component using constructor and super to manage State
*/

import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>Clock</h2>
        <h3>It is { this.state.date.toLocaleTimeString() }</h3>
      </div>
    );
  }
}

export default Clock;