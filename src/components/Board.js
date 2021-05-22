import Todo from './Todo';

export default function Board({todos, moveTodoUp, removeTodo}){

    return(
        <section className={"Board"}>
            {(!todos.length) ? <h4>Create a ToDo to get started!</h4> : 
            <h4>You have {todos.length} more ToDo{(todos.length > 1) ? "s" : ""} to do!</h4>}
            {
                todos.map((todo, ind) => {
                    return(
                    <Todo todo={todo} ind={ind} moveTodoUp={moveTodoUp} removeTodo={removeTodo} key={Math.random()} />
                    )
                })
            }
        </section>
    )
}