import Todo from './Todo';

export default function Board({todos, moveTodoUp, removeTodo}){

    return(
        <section>
            <h2>~ ToDo Board ~</h2>
            <h4>Here are your ToDo's!</h4>
            {
                todos.map((todo, ind) => {
                    return(<Todo todo={todo} ind={ind} moveTodoUp={moveTodoUp} removeTodo={removeTodo} id={Math.random()} />)
                })
            }
        </section>
    )
}