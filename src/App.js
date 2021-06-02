import './reset.css'; // CSS Reset
import './main.css';
import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import CreateTodo from './components/CreateTodo';
import Login from './components/Login';
import Signup from './components/Signup';
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialValues = {
  todos: [],
  lights: (window.localStorage.getItem("lights")) ? false : true, // true for light theme, false for dark
  account: (window.localStorage.getItem("token")) ? true : false, // check if logged in, set to false to work on login thing
  grabTodos: false,
  login: true, // true to display login, false to display signup
}

function App() {
  const [state, setState] = useState(initialValues)

  if(!state.grabTodos){
    axiosWithAuth()
      .get("/todos/fetch")
      .then(res => {
        return(setState({
          ...state,
          todos: res.data.todos,
          grabTodos: true
        }))
      })
      .catch(err => {
        console.log(err)
      })
  }

  if(state.lights){
    document.documentElement.classList.remove(`dark`);
  } else {
    document.documentElement.classList.add(`dark`);
  }

  const addTodo = todo => {
    let working = state.todos
    working.push(todo)
    saveTodos(working)
    return(setState({
      ...state,
      todos: working
    }))
  }

  const removeTodo = todo => {
    let working = state.todos
    working.splice(todo, 1)
    saveTodos(working)
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
    saveTodos(working)
    return(setState({
      ...state,
      todos: working
    }))
  }

  const editTodo = (todo, ind) => {
    let working = state.todos;
    working[ind] = todo
    saveTodos(working)
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

  const toggleAccount = () => {
    return(setState({
      ...state,
      account: !state.account
    }))
  }

  const saveTodos = (todos) => {
    axiosWithAuth()
      .post("/todos/update", todos)
      .then(() => {
      })
      .catch(() => {
      })
  }

  const setLights = lights => {
    if(lights){
      window.localStorage.setItem("lights", false)
    } else {
      window.localStorage.removeItem("lights");
    }
    return(setState({
      ...state,
      lights: !lights
    }))
  }

  return (
    <div className={(state.lights) ? "App" : "App dark-font"} >
      <Header saveTodos={saveTodos} lights={state.lights} setLights={setLights} />
      {
        (!state.account) ? ((state.login) ?
          <Login toggleAccount={toggleAccount} toggleLoginSignup={toggleLoginSignup} lights={state.lights} /> :
          <Signup toggleLoginSignup={toggleLoginSignup} lights={state.lights} />) :
        <div>
          <Board todos={state.todos} moveTodo={moveTodo} removeTodo={removeTodo} editTodo={editTodo} />
          <CreateTodo addTodo={addTodo} />
        </div>
      }
    </div>
  );
}

export default App;
