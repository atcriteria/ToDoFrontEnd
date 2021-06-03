import IconDelete from '../icons/delete';
import IconArrowUp from '../icons/uparrow';
import IconArrowDown from '../icons/downarrow';
import IconCheckCircle from '../icons/checkcircle';

import { useState } from 'react';
import EditTodo from './EditTodo';

export default function Todo({todo, ind, moveTodo, removeTodo, editTodo}){
    const [visible, setVisible] = useState(false)

    const moveUp = e => {
        e.preventDefault()
        moveTodo(ind, -1)
    }

    const moveDown = e => {
        e.preventDefault()
        moveTodo(ind, 1)
    }

    const deleteTodo = e => {
        e.preventDefault()
        removeTodo(ind)
    }

    const toggleEdit = e => {
        e.preventDefault()
        setVisible(!visible)
    }

    return(
        <div className="todo">
            {(!visible) ? "" : <EditTodo todo={todo} toggleEdit={toggleEdit} editTodo={editTodo} ind={ind} />}
            <button className="btn-complete">
                <IconCheckCircle />
            </button>
            <div className="todo-txt">
                <span title={`Description: ${todo.todoDescription}`}>
                    {todo.todoTitle}
                </span>
            </div>
            <div className="todo-btn-bar">
                <button className="btn-delete" onClick={deleteTodo}>
                    <IconDelete />
                </button>
                <button className="btn-move" onClick={moveUp}>
                    <IconArrowUp />
                </button>
                <button className="btn-move" onClick={moveDown}>
                    <IconArrowDown />
                </button>
                <button onClick={toggleEdit}>
                    Edit
                </button>
            </div>
        </div>
    )
}