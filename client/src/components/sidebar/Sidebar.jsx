import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getCategories = async () => {
            const response = await axios.get('/categories')

            setCategories(response.data)


        }

        getCategories()

    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    SOBRE NÓS
                </span>

                <img src="https://github.com/vanderllee.png" alt="Minha imagem" />

                <p>
                    Nós somos alunos do 9A do ensino fundamental,
                    ...

                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIAS
                </span>
                <ul className="sidebarList">
                    {categories.map((cat) => (

                        <Link to={`/?cat=${cat.name}`} className="link">
                            
                            <li className="sidebarListItem">{cat.name}</li>

                        </Link>

                    ))}

                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    SIGA-NOS NAS REDES SOCIAIS
                </span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook-square"></i>
                    <i className=" sidebarIcon fab fa-twitter-square"></i>
                    <i className=" sidebarIcon fab fa-pinterest-square"></i>
                    <i className=" sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}