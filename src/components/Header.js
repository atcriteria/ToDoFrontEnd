import ThemeToggle from './ThemeToggle';

export default function Header({lights, setLights}){
    return(
        <header>
            <h1>
                ToDo, or not ToDo, that is the Do
            </h1>
            <h3>
                A simple ToDo Application to help you track your tasks
            </h3>
            <ThemeToggle lights={lights} setLights={setLights} />
        </header>
    )
}