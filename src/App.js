import React from "react";
import SearchInput from './SearchInput';
import './App.css'

class App extends React.Component {

  render() {
    return (<>
      <div className="custom-container">
        <SearchInput />
      </div>
    </>)
  }
}

export default App;