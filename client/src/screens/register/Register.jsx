import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

import axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr(false)
       
        try {

            const response = await axios.post('/auth/register', {
                username,
                email,
                password
            })

            response.data && window.location.replace('/login')

        }catch (err) {
            setErr(true)
            
        }

    }

    return(
        <div className="register">
            <span className="registerTitle">Cadastrar</span>

            <form onSubmit={ handleSubmit } className="registerForm">
                <label>Nome</label>
                <input 
                    
                    type="text" 
                    className="registerInput" 
                    placeholder="digite o nome..."
                    onChange={ e => setUsername(e.target.value) }
                    />
                    

                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="digite o email..."
                    onChange={ e => setEmail(e.target.value) }
                    />

                <label>Senha</label>
                <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="digite a senha..."
                    onChange={ e => setPassword(e.target.value) }
                    />

                <button className="registerButton">
                    Cadastrar
                </button>
            </form>

            <button type="submit" className="registerLoginButton">
                
                <Link  className="link" to="/login">Login</Link>

            </button>

            { err && <span style={{color: "red", marginTop: "10px"}}> Something went wrong! </span>}
        </div>
    )
}