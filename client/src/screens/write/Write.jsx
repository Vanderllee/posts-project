import { useContext, useState } from 'react'
import './write.css'
import axios from 'axios'

import { Context } from '../../context/Context';

export default function Write() {

    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ file, setFile ] = useState(null);

    const { user }=useContext( Context )
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            username: user.username,
            title,
            desc
        }

        if(file) {
            const data = FormData();

            const filename = Date.now() + file.name;

            data.append("name", filename)
            data.append("file", file)

            newPost.photo = filename

            try {
                await axios.post('/upload')
            } catch(err) {
                //
            }
        }

        axios.post("/posts")
    }

    return (
        <div className="write">
            <img 
                src="https://github.com/vanderllee.png" 
                alt="Minha foto" 
                className="writeImg"
                />
            <form className="writeForm" onSubmit={ handleSubmit }>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>

                <div className="writeFormGroup">
                   <textarea 
                    placeholder="Digite seu texto..."
                    type="text"
                    className="writeInput writeText"
                    >

                    </textarea>
                </div>

                <button type="submit" className="writeSubmit">
                    Enviar
                </button>
            </form>
        </div>
    )
}