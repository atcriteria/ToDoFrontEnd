import { useState } from 'react';

// const initialValues = {
//     todoTitle: "",
//     todoDescription: ""
// }

export default function EditTodo({ todo, toggleEdit, editTodo, ind }){
    const [state, setState] = useState(todo)
 
    const handleChange = e => {
        e.preventDefault()
        return(setState({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if(state.todoTitle === todo.todoTitle && state.todoDescription === todo.todoDescription){
            return alert("Whoops -- you didn't change anything in the ToDo!")
        }
        editTodo(state, ind)
    }

    const clickModal = (e) => {
        if(e.target.className === "Modal"){
            toggleEdit(e)
        } else {
            return
        }
    }

    return(
        <div className="Modal" onClick={clickModal}>
            <div className="Modal-Container">
                <form onSubmit={handleSubmit} >
                    <input required type="text" name="todoTitle" value={state.todoTitle} onChange={handleChange} placeholder="Edit this ToDo!" />
                    <input type="text" name="todoDescription" value={state.todoDescription}
                    onChange={handleChange} placeholder="Write down some details about your updated-ToDo!" />
                    <button type="submit">Update Todo</button>
                </form>
                <button onClick={toggleEdit}>Cancel</button>
            </div>
        </div>
    )
}