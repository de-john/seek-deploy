
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./Menu";
import Main from './Main';
import Test from './Test';

class App extends React.Component {
    render() {
        return (
          <div className="defaultContainer">
            <Menu/>
            <Main/>
            {/* <Test/> */}
          </div>
        );
      }
}

export default App;