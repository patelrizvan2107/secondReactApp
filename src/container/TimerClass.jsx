import React, { Component } from "react";

export default class TimerClass extends Component {
  //1. Creates Components
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date(),
    };
  }

  tick = () => {
    this.setState({ timer: new Date() });
  };

  //3. work for fetch time and etc
  componentDidMount = () => {
    this.timeRef = setInterval(this.tick, 1000);
  };

  //4. it is used to work after props/satate value changed.
  componentDidUpdate = (prevProps, prevState) => {

    console.log('Previous State', prevState);
    console.log('Current State', this.state.timer);

    if (this.state.timer !== prevState.timer) {
        console.log('Value Changed !');
        
    }
  }
  // 5. it is used to realese some of components 
  componentWillUnmount = () => {
    clearInterval(this.timeRef)
    console.log('stopped');
    
  }


  //2. render call, it call every time when components or props value changed
  render() {
    return (
      <div>
        <h3>Time</h3>
        <p>{this.state.timer.toLocaleTimeString()}</p>
      </div>
    );
  }
}
