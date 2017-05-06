import React, { Component } from 'react';
import AddCSS from '../css/add.css';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = { ToDoItem: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }
  handleUpdate(event) {
    this.setState({ ToDoItem: event.target.value });
  }

  addToDo() {
    this.props.addToDo(this.state.ToDoItem);
    this.setState({ ToDoItem: '' });
  }

  render() {
    return (
    <div className="row">
        <form className="col s10 offset-s2">
          <div className="row">
            {/* <label htmlFor="text-input">Add a New Task</label> */}
            {/* <input type="text" className="input-field col s6" placeholder="New Task" id="text-input" onChange={this.handleUpdate} /> */}
            <div className="input-field col s6 flex-add-text">
              <input id="text-input" type="text" onChange={this.handleUpdate} value={this.state.ToDoItem} />
              <label htmlFor="text-input">Add a New Task</label>
            </div>
            <a onClick={this.addToDo} className="waves-effect waves-light btn col s2 flex-add-button">Add</a>
          </div>
        </form>
      {/* <div className="col-sm-6"></div> */}
    </div>
  );
  }
}

export default Add;
