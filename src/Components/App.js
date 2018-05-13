
import React from 'react';
import Menu from "./Menu";
import Main from './Main';
import Test from './Test';
import MapWrapper from './Search';


class App extends React.Component {
    render() {
        return (
          <div className="defaultContainer">
          {/* <MapWrapper/> */}
            <Menu/>
            <Main/>
            {/* <Test /> */}
          </div>
        );
      }
}

export default App;