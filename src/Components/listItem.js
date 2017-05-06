import React, { Component } from 'react';
import listItem from '../css/listItem.css';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { priority: 'High' };
    this.lower = this.lower.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  lower() {
    this.setState({ priority: 'Low' });
  }

  removeToDo() {
    this.props.removeToDo(this.props.item);
  }

  render() {
    return (
    <div className="listItem row">
      <div className="col-sm-1 flex">
        <div className="priority-color red"></div>
      </div>
      <div className="col-sm-8 flex">
        <h4>{this.props.item}</h4>
      </div>
      <div className="col-sm-3 flex">
        <button className="btn" onClick={this.removeToDo}>DONE!</button>
      </div>
      {/* <h4>{this.state.priority}</h4> */}
    </div>
  );
  }
}

export default ListItem;
