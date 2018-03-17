import React, { Component } from 'react';
import './Todo.css';
import './App.css';
import TodoList from './TodoList';
import firebase from './fire';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    
}

componentDidMount() {
  const prevTodos = this.state.text;
  const itemsRef = firebase.database().ref('Todos');
  itemsRef.on('child_added', snap =>{
    prevTodos.push({
      text: snap.val().text,
    })
  })
this.setState({text: prevTodos});
}
handleChange(e) {
  this.setState({ text: e.target.value });
}

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.text.length) {
    return;
  }
  const itemsRef = firebase.database().ref('Todos');
  const newItem = {
    text: this.state.text,
    id: Date.now()
  };
  itemsRef.push(newItem);
  this.setState(prevState => ({
    items: prevState.items.concat(newItem),
    text: ''
  }));
}

handleRemove(id) {
  // Filter all todos except the one to be removed
  const remainder = this.state.items.filter((todo) => {
    if(todo.id !== id) 
      return todo;
  });
  // Update state with filter
  this.setState({items: remainder});
}




render() {
  return (
    <div className='app'>
      <header>
        <div className='wrapper'>
          <h3>TODO</h3>
         
        </div>
      </header>
      
      <div className='container'>
        <section className='add-item'>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input 
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>
          Add #{this.state.items.length + 1}
        </button>
      </form>
      </section>
      <section className='display-item'>
        <div className='wrapper'>
          <TodoList items={this.state.items} remove={this.handleRemove.bind(this)}  />
        </div>
      </section>
      </div>
    </div>
  );
}
}
export default App;
