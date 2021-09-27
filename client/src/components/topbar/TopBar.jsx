import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

export default function TopBar() {

    const { user, dispatch } = useContext( Context )

    const handleLogout = () => {

        dispatch({ type: "LOGOUT" })

    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
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
                            WRITE
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
                        <img 
                            className="topImg" 
                            src={ user.profilePic } 
                            alt="User" 
                        />
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