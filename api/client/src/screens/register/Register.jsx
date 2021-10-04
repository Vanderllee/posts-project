import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import Loader from "react-loader-spinner";
import { axiosInstance } from '../../utils';

export default function Register() {

    const [loading, setLoading] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [error, setError ] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr(false)
       
        if(!username || (typeof username === 'string' && !username.trim())) {
            setLoading(false)
            setError('Cadastro inválido!')
        } else if(!email || !email.includes('@') ) {
            setLoading(false)
            setError('Cadastro inválido!')
        } else if(!password || (Array.isArray(password) && password.length <= 3) || (parseInt(password) <= 3) ) {
            setLoading(false)
            setError('Cadastro inválido!')
        } else {

            try {
        
                const response = await axiosInstance.post('/auth/register', {
                    username,
                    email,
                    password
                })
                
                response.data && window.location.replace('/login')
                setLoading(false)
            }catch (err) {
                setLoading(false)
                setErr(true)
                
            }
        }



    }

    return(
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
        : <div className="register">
            <span className="registerTitle">Cadastrar</span>

            <form onSubmit={ handleSubmit } className="registerForm">
                <label>Nome</label>
                <input 
                    
                    type="text" 
                    className={error? 'inputErr':"registerInput " } 
                    placeholder="digite o nome..."
                    onChange={ e => setUsername(e.target.value) }
                    
                    />
                    

                <label>Email</label>
                <input 
                    type="text" 
                    className={error? 'inputErr':"registerInput " } 
                    placeholder="digite o email..."
                    onChange={ e => setEmail(e.target.value) }
                    />

                <label>Senha</label>
                <input 
                    type="password" 
                    className={error? 'inputErr':"registerInput " }  
                    placeholder="digite a senha..."
                    onChange={ e => setPassword(e.target.value) }
                    />
                {
                  error &&  (<span className="inputError">
                      { error }
                  </span>)
                }

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