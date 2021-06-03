import ThemeToggle from './ThemeToggle';

export default function Header({ lights, setLights, callLogout }){

    const submitLogout = e => {
        e.preventDefault();
        callLogout();
    }

    return(
        <header>
            <h1>
                ToDo, or not ToDo, that is the Do
            </h1>
            <h3>
                A simple ToDo Application to help you track your tasks
            </h3>
            <nav className="nav-header">
                {
                    (!window.localStorage.getItem("token")) ? "" : 
                    <button className="reg-btn" onClick={submitLogout} >Logout</button>
                }
                <ThemeToggle lights={lights} setLights={setLights} />
            </nav>
        </header>
    )
}