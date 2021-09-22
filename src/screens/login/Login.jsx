
import './login.css'

export default function Login() {
    return(
        <div className="login">
            <span className="loginTitle">Login</span>

            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="digite o email..."/>

                <label>Senha</label>
                <input type="text" className="loginInput" placeholder="digite a senha..."/>

                <button className="loginButton">
                    Entrar
                </button>
            </form>

            <button className="loginRegisterButton">
                Cadastrar
            </button>
        </div>
    )
}