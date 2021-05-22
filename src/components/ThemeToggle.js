export default function ThemeToggle({lights, setLights}){

    const clickHandler = () => {
        setLights(lights)
    }
    return(
        <div className="theme-toggler" >
            <label className="switch">
                <input type="checkbox" onClick={clickHandler}/>
                <span className="slider"></span>
            </label>
        </div>
    )
}