import { useState } from 'react';
import TextModal from './TextModal';
import axios from 'axios';
// import bcrypt from 'bcrypt';

const initialValues = {
    username: "",
    password: ""
}

export default function Login({toggleLoginSignup, toggleAccount, lights}) {
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
        // const rounds = process.env.BCRYPT_ROUNDS || 8;
        // const hashedAccount = {
        //     username: bcrypt.hashSync(state.username, rounds),
        //     password: bcrypt.hashSync(state.password, rounds)
        // }
        axios.post("http://localhost:5000/api/auth/login", state)
            .then(res => {
                console.log(res.data)
                window.localStorage.setItem("token", res.data.token)
                toggleAccount()
            })
            .catch(err => {
                console.log(err)
            })
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
        <div className={(lights) ? "login-container" : "login-container dark"}>
            {
                (textModal) ? <TextModal clickModal={clickModal} lights={lights} /> : ""
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