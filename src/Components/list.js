import React, { Component } from 'react';
import ListItem from './listItem.js';
import Add from './add.js';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = { items: ['Brush your teeth.', 'Get dressed.', 'Feed the fish.', 'Clean your room.', 'Wake Mommy up.'] };
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  renderListItems() {
    return this.state.items.map(item => (
      <ListItem key={item} item={item} removeToDo={this.removeToDo} />
    ));
  }

  addToDo(newToDo) {
    this.setState({ items: [...this.state.items, newToDo] });
  }

  removeToDo(badToDo) {
  const filteredToDos = this.state.items.filter(item => {
    return item !== badToDo;
  });
  this.setState({ items: filteredToDos });
}

  render() {
    return (
    <div className="container">
      <div className="title-box">
        <p>
          {/* <a className="btn btn-lg btn-danger" href="../../components/#navbar" role="button">See your list &raquo;</a> */}
        </p>
        <Add addToDo={this.addToDo}/>
      </div>
      <div>
        {this.renderListItems()}
      </div>
    </div>
  );
  }
}

export default List;
