import React from "react";
import FriendListComp from './FriendListComp';
import './App.css'

import ChildClass from './ChildClass';

class App extends React.Component {

  state = {
    count: 5
  };

  componentDidMount = () => {
    console.log('comp did mount called')
  }

  componentDidUpdate = () => {
    console.log('comp did update called')
  }

  countIncrementor = () => {
    this.setState({ count: this.state.count + 1 })
  }

  tempMethod = () => {
    console.log('method called')
  }

  render() {
    return (<>
      {/* <div>App component</div>
      <div>Count is... {this.state.count}</div>
      <div><button onClick={this.countIncrementor}>Incrementor</button></div>
      <div>***************************************************************</div>
      <ChildClass tempMethod = {this.tempMethod}/> */}

      <FriendListComp />
    </>)
  }
}

export default App;