import IconDelete from '../icons/delete';
import IconArrowUp from '../icons/uparrow';
import IconCheckCircle from '../icons/checkcircle';

export default function Todo({todo, ind, moveTodoUp, removeTodo}){

    const moveUp = e => {
        e.preventDefault()
        moveTodoUp(ind)
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
        </div>
    )
}