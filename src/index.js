import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this);
  }


  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      // items: state.items.concat(newItem),
      items: [...state.items, newItem],
      text: ''
    }));
  }
  render() {
    return (
      <div className="ToDoHeader">
        <h3>My TODO list</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            type="text"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="link" type="submit" value="submit">
            Add #{this.state.items.length + 1} TODO list
          </button>
        </form>
      </div>
    );
  }


}

class TodoList extends React.Component {
  render() {
    return (

      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  // document.getElementById('root')
  document.getElementById('todo')

);
