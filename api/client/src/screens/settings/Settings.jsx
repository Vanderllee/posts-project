import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import { axiosInstance } from '../../utils';

import './settings.css'

export default function Settings() {

    const { user, dispatch } = useContext( Context )
    const PF = 'http://localhost:5000/images/'

    const [ file, setFile ] = useState(null);
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ sucess, setSucess ] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START" })

        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }

        if(file) {
            const data = new FormData();

            const filename = Date.now() + file.name;

            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename

            try {
                await axiosInstance.post('/upload', data)
            } catch(err) {
                //
            }
        }
        
        try {
            
             const response = await axiosInstance.put(`/users/${user._id}`, updatedUser)
            setSucess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: response.data })

        } catch(err) {
            dispatch({ type: 'UPDATE_FAILURE' })
        }
    }


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Atualize sua conta
                    </span>
                
                </div>

                <form 
                    className="settingsForm"
                    onSubmit={ handleSubmit }
                >
                    <label>Foto</label>
                    <div className="settingsPP">
                        <img 
                            src={file ? URL.createObjectURL(file) : PF+user.profilePic} 
                            alt="Minha foto" 
                        />

                        <label htmlFor="fileInput">
                            <i className=" settingsPPIcon far fa-user-circle"></i>
                        </label>

                        <input 
                            type="file" 
                            id="fileInput"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{display: 'none'}}
                        />
                    </div>

                    <label>Usuário</label>
                    <input 
                        type="text" 
                        placeholder={ user.username }
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder={ user.email } 
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha</label>
                    <input 
                        type="password" 
                        placeholder="digite..."
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button 
                        className="settingsSubmit"
                        type="submit"
                    >
                        Atualizar
                    </button>

                    {
                        sucess && ( <span 
                            style={{color: 'green', textAlign: 'center', marginTop: '20px'}}
                            > Usuário atualizado com sucesso! </span> )
                    }
                </form>

                <Sidebar />

            </div>
        </div>
    )
}