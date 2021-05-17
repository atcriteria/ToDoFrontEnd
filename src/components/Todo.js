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
            <button>done</button><span>{todo}</span><button onClick={deleteTodo}>kill</button><button onClick={moveUp}>^</button>
        </div>
    )
}