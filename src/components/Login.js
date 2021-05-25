import { useState } from 'react';
import TextModal from './TextModal';

const initialValues = {
    username: "",
    password: ""
}

export default function Login({toggleLoginSignup}) {
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
        alert('yup you did it')
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

    const clickSignup = e => {
        e.preventDefault()
        toggleLoginSignup()
    }

    return(
        <div className="login-container">
            {
                (textModal) ? <TextModal clickModal={clickModal} /> : ""
            }
            <h3>Already have an account? Log in below.</h3>
            <form onSubmit={handleSubmit} >
                <label><p>Username:</p>
                    <input type="text" name="username" onChange={handleChange} value={state.username} required />
                </label>
                <label><p>Password:</p>
                    <input type="password" name="password" onChange={handleChange} value={state.password} required />
                </label>
                <button type="submit">
                    Login
                </button>
            </form>
            <p>Don't have an account? <em onClick={clickSignup}>Sign up</em> here!</p>
            <p onClick={whyAccount}><em>Account Policy</em></p>
        </div>
    )
}