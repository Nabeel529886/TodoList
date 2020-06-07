import React from 'react'
import "./App.css"

let id = 0

const Todo = props => (
  <li className="todo-list-items">
    <input className="item-checkbox" type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <span className="item-text">{props.todo.text}</span>
    <span className="item-datetime">{props.todo.datetime}</span>
    <input type="button" value="Delete" className="item-deleteBtn" onClick={props.onDelete} />
    <input type="button" value="Edit" className="item-editBtn" onClick={props.onEdit} />
  </li>
)

export default class App extends React.Component{
  state = {
    todos: [],
  }

  addTodo(){
    const text = prompt("Enter Your Todo")
    if(text.length === 0){
      alert("Empty Todo's Can't Be Added")
    }
    else{
      const datetime = new Date()
      this.setState({
        todos: [...this.state.todos, {id: id++, text: text, datetime: `Added On ${datetime.toLocaleString()}`, checked: false}]
      })
    }
  }

  editTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        const editText = prompt("Enter The Text You Want to Update")
        if (editText.length === 0) {
          return todo        
        } 
          const datetime = new Date()
          return {
            id: todo.id,
            text: editText,
            datetime: `Updated on ${datetime.toLocaleString()}`,
            checked: false,
          }
      })
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
          datetime: todo.datetime,
          checked: !todo.checked,
        }
      })
    })
  }


  render(){
    return (
      <div id="main-div">
        <h1>BootCamp Todo List</h1>
        <div className="count-div">
          <p>Total Todos: {this.state.todos.length}</p>
          <p>Unchecked Todos: {this.state.todos.filter(todo => !todo.checked).length}</p>
        </div>
        <button className="addtodo-btn" onClick={() => this.addTodo()}>Add A new Todo</button>
        <ul className="todo-list">
          {this.state.todos.map(todo => (
            <Todo 
            onToggle={() => this.toggleTodo(todo.id)} 
            onDelete={() => this.removeTodo(todo.id)}
            onEdit={() => this.editTodo(todo.id)}
            todo={todo}  />
          ))}
        </ul>
      </div>
    )
  }
}





















