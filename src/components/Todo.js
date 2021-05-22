import IconDelete from '../icons/delete';
import IconArrowUp from '../icons/uparrow';
import IconArrowDown from '../icons/downarrow';
import IconCheckCircle from '../icons/checkcircle';

export default function Todo({todo, ind, moveTodo, removeTodo}){

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

    return(
        <div className="todo">
            <button className="btn-complete">
                <IconCheckCircle />
            </button>
            <span title={`Description: ${todo.todoDescription}`}>
                {todo.todoTitle}
            </span>
            <button className="btn-delete" onClick={deleteTodo}>
                <IconDelete />
            </button>
            <button className="btn-move" onClick={moveUp}>
                <IconArrowUp />
            </button>
            <button className="btn-move" onClick={moveDown}>
                <IconArrowDown />
            </button>
        </div>
    )
}