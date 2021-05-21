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
        <div>
            <button>
                <IconCheckCircle />
            </button>
            <span>
                {todo}
            </span>
            <button onClick={deleteTodo}>
                <IconDelete />
            </button>
            <button onClick={moveUp}>
                <IconArrowUp />
            </button>
        </div>
    )
}