import { useState } from 'react';

const initialValues = {
    todoInput: ""
}

export default function CreateTodo({addTodo}){
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
        <section>
            <p>Todo: {state.todoInput}</p>
            <form onSubmit={handleSubmit} >
                <label>
                    <input type="text" name="todoInput" value={state.todoInput} onChange={handleChange} />
                </label>
                <button type="submit">Add Todo</button>
            </form>
        </section>
    )
}