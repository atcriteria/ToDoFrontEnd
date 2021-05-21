import './reset.css'; // CSS Reset
import './main.css';
import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import CreateTodo from './components/CreateTodo';

const initialValues = {
  todos: []
}

function App() {
  const [state, setState] = useState(initialValues)

  const addTodo = todo => {
    let working = state.todos
    working.push(todo)
    console.log(working)
    return(setState({
      ...state,
      todos: working
    }))
  }

  const removeTodo = todo => {
    let working = state.todos
    working.splice(todo, 1)
    return(setState({
      ...state,
      todos: working
    }))
  }

  const moveTodoUp = todo => {
    if(todo === 0){
      return
    }
    let working = [...state.todos]
    let tempTodo = working[todo]
    let newInd = todo - 1
    working.splice(todo, 1)
    working.splice(newInd, 0, tempTodo)
    return(setState({
      ...state,
      todos: working
    }))
  }

  return (
    <div className="App">
      <Header />
      <Board todos={state.todos} moveTodoUp={moveTodoUp} removeTodo={removeTodo} />
      <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
