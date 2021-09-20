import './sidebar.css'

export default function Sidebar() {
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
                   <li className="sidebarListItem">Life</li>
                   <li className="sidebarListItem">Music</li>
                   <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sports</li>
                   <li className="sidebarListItem">Tec</li>
                   <li className="sidebarListItem">Cinema</li>
               </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
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