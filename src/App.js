import React from 'react'

let id = 0

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
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
      <div>
        <h1>BootCamp Todo List</h1>
        <button onClick={() => this.addTodo()}>Add A new Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onToggle={() => this.toggleTodo(todo.id)} todo={todo}  />
          ))}
        </ul>
      </div>
    )
  }
}