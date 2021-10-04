import { useContext, useState } from 'react'
import './write.css'
import { axiosInstance } from '../../utils';

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
            const data = new FormData();

            const filename = Date.now() + file.name;

            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename

            try {
                await axiosInstance.post('/upload', data)
            } catch(err) {
                //
            }
        }

        try {

          const response= await axiosInstance.post("/posts", newPost)

          window.location.replace('/post/' + response.data._id)

        } catch(err) {
            //
        }
    }

    return (
        <div className="write">

            {file && <img 
                src={ URL.createObjectURL(file) }
                alt="" 
                className="writeImg"
            /> }


            <form className="writeForm" onSubmit={ handleSubmit }>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                    </label>

                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display: 'none'}}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="writeInput"
                        autoFocus={true}
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>

                <div className="writeFormGroup">
                   <textarea 
                    placeholder="Digite seu texto..."
                    type="text"
                    className="writeInput writeText"
                    onChange={ (e) => setDesc(e.target.value) }
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