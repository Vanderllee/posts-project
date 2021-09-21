import Sidebar from '../../components/sidebar/Sidebar'

import './settings.css'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Atualize sua conta
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete sua conta
                    </span>
                </div>

                <form className="settingsForm">
                    <label>Foto</label>
                    <div className="settingsPP">
                        <img 
                            src="https://github.com/vanderllee.png" 
                            alt="Minha foto" 
                        />

                        <label htmlFor="fileInput">
                            <i className=" settingsPPIcon far fa-user-circle"></i>
                        </label>

                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>

                    <label>Usuário</label>
                    <input type="text" placeholder="digite..."/>

                    <label>Email</label>
                    <input type="email" placeholder="digite..."/>

                    <label>Senha</label>
                    <input type="password" placeholder="digite..."/>

                    <button className="settingsSubmit">
                        Atualizar
                    </button>
                </form>

                <Sidebar />

            </div>
        </div>
    )
}