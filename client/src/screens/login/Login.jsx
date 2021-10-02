
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react';
import './login.css'
import axios from 'axios';
import { Context } from '../../context/Context';




export default function Login() {


    const userRef = useRef();
    const passwordRef = useRef();

    const { dispatch, isFetching } = useContext( Context )

    const handleSubmit = async (e) => {

        e.preventDefault();
        dispatch({
            type: "LOGIN_START" 
        })

        try {
            const response = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            });

            dispatch({ type: "LOGIN_SUCCESS", payload: response.data })

        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }

    }


    return(
        <div className="login">
            <span className="loginTitle">Login</span>

            <form onSubmit={ handleSubmit } className="loginForm">
                <label>Nome</label>
                <input 
                    type="text" 
                    className="loginInput" 
                    placeholder="digite o nome..."
                    ref={ userRef }
                />

                <label>Senha</label>
                <input 
                    type="password" 
                    className="loginInput" 
                    placeholder="digite a senha..."
                    ref={ passwordRef }
                />

                <button 
                    type="submit" 
                    className="loginButton" 
                    disabled={ isFetching }
                    >
                    Entrar
                </button>
            </form>

            <button className="loginRegisterButton">
                <Link className="link" to="/cadastro">Cadastro</Link>
            </button>
        </div>
    )
}