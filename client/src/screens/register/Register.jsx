
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return(
        <div className="register">
            <span className="registerTitle">Cadastrar</span>

            <form className="registerForm">
                <label>Nome</label>
                <input type="text" className="registerInput" placeholder="digite o nome..."/>

                <label>Email</label>
                <input type="text" className="registerInput" placeholder="digite o email..."/>

                <label>Senha</label>
                <input type="text" className="registerInput" placeholder="digite a senha..."/>

                <button className="registerButton">
                    Cadastrar
                </button>
            </form>

            <button className="registerLoginButton">
                
            <Link  className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}