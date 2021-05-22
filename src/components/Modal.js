import { useState } from 'react';

const initialValues = {
    todoInput: ""
}

export default function Modal({addTodo, toggleVisible}){
    const [state, setState] = useState(initialValues)
 
    const handleChange = e => {
        e.preventDefault()
        return(setState({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if(state.todoInput === undefined || state.todoInput === ""){
            return
        }
        addTodo(state.todoInput)
        return(setState({
            ...state,
            todoInput: ""
        }))
    }

    return(
        <div className="Modal">
            <div className="Modal-Container">
                { (!state.todoInput) ? "" : <p>"{state.todoInput}"</p> }
                <form onSubmit={handleSubmit} >
                    <label>
                        <input type="text" name="todoInput" value={state.todoInput} onChange={handleChange} size="60" placeholder="Begin typing a task to do!" />
                    </label>
                    <button type="submit">Add Todo</button>
                </form>
                <button onClick={toggleVisible}>Cancel</button>
            </div>
        </div>
    )
}