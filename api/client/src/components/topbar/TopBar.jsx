import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

export default function TopBar() {

    const { user, dispatch } = useContext( Context )

    const PF = 'http://localhost:5000/images/'

    const handleLogout = () => {

        dispatch({ type: "LOGOUT" })

    }

    return (
        <div className="top">
            <div className="topLeft">
                <a 
                    href="https://facebook.com/pages/E.M.E.F%20Engenheiro%20Jos%C3%A9%20Amadei/114176958598965/" 
                    target="_blank" 
                    rel="noreferrer" 
                >
                    <i className=" topIcon fab fa-facebook-square"></i>
                </a>
                
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                <a 
                    href="https://instagram.com/vanderllee/" 
                    target="_blank" 
                    rel="noreferrer" 
                >
                    <i className=" topIcon fab fa-instagram-square"></i>
                </a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                       
                        <Link className="link" to="/sobre">
                            SOBRE
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contato">
                            CONTATO
                        </Link>   
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            POST
                        </Link>
                        </li>
                    <li 
                    onClick={ handleLogout }
                    className="topListItem"
                    >

                        { user && 'SAIR' }

                    </li>
                </ul>
            </div>
            <div className="topRight">


                
                {
                    user ? (
                        <Link to="/settings">
                            <img 
                                className="topImg" 
                                src={ PF+user.profilePic } 
                                alt="User" 
                            />
                        </Link>
                    ): (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>

                            <li className="topListItem">
                                <Link className="link" to="/cadastro">
                                    CADASTRO
                                </Link>
                            </li>
                            
                        </ul>
                    )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}