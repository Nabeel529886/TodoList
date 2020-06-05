import React from 'react'
import "./App.css"

let id = 0

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)

export default class App extends React.Component{
  state = {
    todos: [],
  }

  addTodo(){
    const text = prompt("Enter Your Todo")
    this.setState({
      todos: [...this.state.todos, {id: id++, text: text, checked: false}]
    })
  }

  removeTodo(id){
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }
  render(){
    return (
      <div id="main-div">
        <h1>BootCamp Todo List</h1>
        <div>
          <p>Total Todos: {this.state.todos.length}</p>
          <p>Unchecked Todos: {this.state.todos.filter(todo => !todo.checked).length}</p>
        </div>
        <button onClick={() => this.addTodo()}>Add A new Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo 
            onToggle={() => this.toggleTodo(todo.id)} 
            onDelete={() => this.removeTodo(todo.id)}
            todo={todo}  />
          ))}
        </ul>
      </div>
    )
  }
}