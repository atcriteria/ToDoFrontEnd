import { useState } from 'react';

const initialValues = {
    todoTitle: "",
    todoDescription: ""
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
        if(state.todoTitle === undefined || state.todoTitle === ""){
            alert("You must enter a title before you can create a ToDo!!")
            return
        }
        addTodo(state)
        setState(initialValues)
        toggleVisible(e)
    }

    const clickModal = (e) => {
        if(e.target.className === "Modal" || e.target.className === "Modal-close-btn"){
            toggleVisible(e)
        } else {
            return
        }
    }

    return(
        <div className="Modal" onClick={clickModal}>
            <div className="Modal-Container">
                <div className="Modal-close-btn" onClick={clickModal}>Close</div>
                { (!state.todoInput) ? "" : <p>"{state.todoInput}"</p> }
                <form onSubmit={handleSubmit} >
                    <input required type="text" name="todoTitle" value={state.todoInput} onChange={handleChange} size="60" placeholder="Begin typing a task to do!" />
                    <input type="text" name="todoDescription" value={state.todoDescription}
                    onChange={handleChange} size="60" placeholder="Write down some details about your new-ToDo!" />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        </div>
    )
}