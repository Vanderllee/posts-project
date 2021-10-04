import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import  imagem  from '../../assets/turma9A.jpeg'

import { axiosInstance } from '../../utils';


export default function Sidebar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getCategories = async () => {
            const response = await axiosInstance.get('/categories')

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

                <img src={ imagem } alt="" />

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
                    SIGA A GENTE 
                </span>
                <div className="sidebarSocial">

                <a 
                    href="https://facebook.com/pages/E.M.E.F%20Engenheiro%20Jos%C3%A9%20Amadei/114176958598965/" 
                    target="_blank" 
                    rel="noreferrer" 
                >
                    
                    <i className=" sidebarIcon fab fa-facebook-square"></i>
                </a>


                    <i className=" sidebarIcon fab fa-twitter-square"></i>
                    <i className=" sidebarIcon fab fa-pinterest-square"></i>
                    <i className=" sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}