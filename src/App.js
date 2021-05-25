import './reset.css'; // CSS Reset
import './main.css';
import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import CreateTodo from './components/CreateTodo';
import Login from './components/Login';
import Signup from './components/Signup';

const initialValues = {
  todos: [],
  lights: true, // true for light theme, false for dark
  account: false, // check if logged in, set to false to work on login thing
  login: true // true to display login, false to display signup
}

function App() {
  const [state, setState] = useState(initialValues)


  if(state.lights){
    document.documentElement.classList.remove(`dark`);
  } else {
    document.documentElement.classList.add(`dark`);
  }

  const addTodo = todo => {
    let working = state.todos
    working.push(todo)
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

  /*
  @param todo: the index of the todo to adjust
  @param direction: 1 or -1 to determine up or down
  */
  const moveTodo = (todo, direction) => {
    let maxLen = state.todos.length - 1
    if(todo === 0 && direction<0){
      return
    }
    if(todo >= maxLen && direction === 1){
      return
    }
    let working = [...state.todos]
    let tempTodo = working[todo]
    let newInd = todo + direction
    working.splice(todo, 1)
    working.splice(newInd, 0, tempTodo)
    return(setState({
      ...state,
      todos: working
    }))
  }

  const editTodo = (todo, ind) => {
    let working = state.todos;
    working[ind] = todo
    return setState({
      ...state,
      todos: working
    })
  }

  const toggleLoginSignup = () => {
    return(setState({
      ...state,
      login: !state.login
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
      {
        (!state.account) ? ((!state.login) ? <Login toggleLoginSignup={toggleLoginSignup} /> : <Signup toggleLoginSignup={toggleLoginSignup} />) :
        <div>
          <Board todos={state.todos} moveTodo={moveTodo} removeTodo={removeTodo} editTodo={editTodo} />
          <CreateTodo addTodo={addTodo} />
        </div>
      }
    </div>
  );
}

export default App;
