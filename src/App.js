import './reset.css'; // CSS Reset
import './main.css';
import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import CreateTodo from './components/CreateTodo';

const initialValues = {
  todos: [],
  lights: true // true for light theme, false for dark
}

function App() {
  const [state, setState] = useState(initialValues)

  if(state.lights){
    document.documentElement.classList.remove(`dark`);
  } else {
    document.documentElement.classList.add(`dark`);
  }
  console.log(document.documentElement.classList)

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

  const setLights = lights => {
    return(setState({
      ...state,
      lights: !lights
    }))
  }

  return (
    <div className={(state.lights) ? "App" : "App dark-font"} >
      <Header lights={state.lights} setLights={setLights} />
      <Board todos={state.todos} moveTodoUp={moveTodoUp} removeTodo={removeTodo} />
      <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
