import { useState } from 'react';
import TextModal from './TextModal';

const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
}

export default function Signup({toggleLoginSignup, lights}) {
    const [state, setState] = useState(initialValues);
    const [textModal, setTextModal] = useState(false)

    const handleChange = e => {
        return(setState({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(state.password === state.passwordConfirm){
            alert('yup you did it')
        } else {
            alert('Your passwords must match >:(')
            setState({
                ...state,
                password: "",
                passwordConfirm: ""
            })
        }
    }

    const whyAccount = e => {
        e.preventDefault();
        setTextModal(!textModal)
    }

    const clickModal = (e) => {
        if(e.target.className === "Modal" || e.target.className === "Modal-close-btn"){
            setTextModal(!textModal)
        } else {
            return
        }
    }

    const clickLogin = e => {
        e.preventDefault()
        toggleLoginSignup()
    }

    return(
        <div className={(lights) ? "login-container" : "login-container dark"}>
            {
                (textModal) ? <TextModal clickModal={clickModal} lights={lights} /> : ""
            }
            <h3>Create a free account below</h3>
            <form onSubmit={handleSubmit} >
                <label><p>Username:</p>
                    <input type="text" name="username" onChange={handleChange} value={state.username} required />
                </label>
                <label><p>Password:</p>
                    <input type="password" name="password" onChange={handleChange} value={state.password} required />
                </label>
                <label><p>Confirm Password:</p>
                    <input type="password" name="passwordConfirm" onChange={handleChange} value={state.passwordConfirm} required />
                </label>
                <label><p>Email Address:</p>
                    <input type="email" name="email" onChange={handleChange} value={state.email} required />
                </label>
                <button type="submit">
                    Sign up
                </button>
            </form>
            <p>Already have an account? <em onClick={clickLogin}>Log in</em> here!</p>
            <p onClick={whyAccount}><em>Account Policy</em></p>
        </div>
    )
}