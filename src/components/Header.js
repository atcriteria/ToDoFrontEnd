import ThemeToggle from './ThemeToggle';

export default function Header({lights, setLights}){
    return(
        <header>
            <h1>
                ToDo Thing
            </h1>
            <ThemeToggle lights={lights} setLights={setLights} />
        </header>
    )
}