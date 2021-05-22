import Modal from './Modal';
import { useState } from 'react';

export default function CreateTodo({addTodo}){
    const [visible, setVisible] = useState(false)

    const toggleVisible = e => {
        e.preventDefault();
        setVisible(!visible)
    }

    return(
        <section className="todo-creator">
            {
                (!visible) ? "" :
                <Modal toggleVisible={toggleVisible} addTodo={addTodo} />
            }
            {
                (visible) ? "" :
                <button onClick={toggleVisible}>Create ToDo</button>
            }
        </section>
    )
}