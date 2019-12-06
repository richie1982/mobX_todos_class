import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject('toDoStore')
@observer

class App extends Component {

  state = {
    input: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.toDoStore.addToDo(this.state.input)
    this.setState({input: ""})
  }

  render() {

    const { toDoStore } = this.props

    return (
      <div>
        <h1>To Do App</h1>
        <h2>{toDoStore.todoCount}</h2>
        <form
          onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter To Do..."
            onChange={e => this.setState({input: e.target.value})}
            value={this.state.input}
          />
          <button>Submit</button>
        </form>
        <ul>
          {toDoStore.todos.map(el => <li key={el}>{el}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
