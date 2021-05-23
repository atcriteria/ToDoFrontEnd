import Todo from './Todo';

export default function Board({todos, moveTodo, removeTodo, editTodo}){

    return(
        <section className={"Board"}>
            {(!todos.length) ? <h4>Create a ToDo to get started!</h4> : 
            <h4>You have {todos.length} more ToDo{(todos.length > 1) ? "s" : ""} to do!</h4>}
            {
                todos.map((todo, ind) => {
                    return(
                    <Todo todo={todo} ind={ind} moveTodo={moveTodo} removeTodo={removeTodo} editTodo={editTodo} key={Math.random()} />
                    )
                })
            }
        </section>
    )
}