
import { Link } from 'react-router-dom'
import React, { useContext, useRef, useState } from 'react';
import './login.css'
import axios from 'axios';
import { Context } from '../../context/Context';

import Loader from "react-loader-spinner";

import { axiosInstance } from '../../utils';


export default function Login() {

    const [loading, setLoading] = useState(false);

    const userRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');

    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true)

        if (!userRef.current.value || !passwordRef.current.value) {
            setLoading(false)
            setError('Nome/senha inválidos!')
        } else {
            dispatch({
                type: "LOGIN_START"
            })

            try {
                
                const response = await axiosInstance.post('/auth/login', {
                    username: userRef.current.value,
                    password: passwordRef.current.value
                    
                });

                dispatch({ type: "LOGIN_SUCCESS", payload: response.data })

                setLoading(false)

            } catch (err) {
                setLoading(false)
                dispatch({ type: "LOGIN_FAILURE" })
            }
        }

    }


    return (

        loading 
        ? (<div className="loader">
            <Loader 
            type="ThreeDots"
            color="#FF0075"
            height={220}
            width={220}
            timeout={4000} 
          />
        </div>)
        : (<div className="login">
                <span className="loginTitle">Login</span>

                <form onSubmit={handleSubmit} className="loginForm">
                    <label>Nome</label>
                    <input
                        type="text"
                        className={error ? 'inputErr' : "loginInput"}
                        placeholder="digite o nome..."
                        ref={userRef}
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        className={error ? 'inputErr' : "loginInput"}
                        placeholder="digite a senha..."
                        ref={passwordRef}
                    />

                    {
                        error && (
                            <span className="inputError">
                                {error}
                            </span>
                        )
                    }

                    <button
                        type="submit"
                        className="loginButton"
                        disabled={isFetching}
                    >
                        Entrar
                    </button>
                </form>

                <button className="loginRegisterButton">
                    <Link className="link" to="/cadastro">Cadastro</Link>
                </button>
            </div>
            )


    )
}