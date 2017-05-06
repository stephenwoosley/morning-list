import React from 'react';
import ReactDOM from 'react-dom';
import List from './Components/list.js';
import Add from './Components/add.js';
import { NavLink } from 'react-router-dom';
import './css/index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <div className="body-box">
        <div className="title-bar ">
          <div className="container">
            <div className="col s6">
              <h1>Gabriella's Morning List</h1>
            </div>
          </div>
        </div>
        <Route path="/list" component={List}/>
        <Route path="/add" component={Add}/>
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
