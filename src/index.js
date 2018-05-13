import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Capacity.css';
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App';



render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// ReactDOM.render(<Router />, document.getElementById('root'));




// ReactDOM.render(<App/>, document.querySelector('#App'));