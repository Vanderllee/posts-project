import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router'
import './singlepost.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';




export default function Singlepost() {

    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})
    const { user }=useContext( Context )
    const [ title, setTitle ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ updateMode, setUpdateMode ] = useState(false)

    const PF="http://localhost:5000/images/"
 

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`/posts/${path}`)

            setPost(response.data)
            setTitle(response.data.title)
            setDesc(response.data.desc)
        } 

        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {data: { username: user.username }})

            window.location.replace('/')

        } catch (err) {
            //
        }
    }

   const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc })

            //window.location.reload()
            setUpdateMode( false )
        } catch (err) {
         //
        }
   }


    return (
        <div className="singlepost">
            <div className="singlePostWraper">
                {
                    post.photo && (
                        <img src={ PF + post.photo} 
                            alt="Minha imagem" 
                            className="singlePostImg" 
                        />

                )}

                { updateMode 
                    ? (<input 
                        type="text" 
                        value={ title }  
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />)
                    : (<h1 className="singlePostTitle">
                        { title }

                        {  post.username === user?.username && 
                        (<div className="singlePostEdit">

                                <i className=" singlePostIcon far fa-edit" 
                                    onClick={() => { setUpdateMode(true) }}
                                ></i>
                                <i className=" singlePostIcon far fa-trash-alt" 
                                    onClick={ handleDelete }
                                ></i>
                        
                            </div>
                        )
                            
                        } 
                        </h1>
                    )
                
                }


                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                            <Link to={ ` /?user=${ post.username } ` } className="link">
                                <b>{post.username}</b>
                            </Link>
                    </span>

                    <span className="singlePostDate">
                        { new Date(post.createdAt).toDateString() }
                    </span>
                </div>

                {
                    updateMode 
                    ? (<textarea 
                        className="singlePostDescInput" 
                        value={ desc }
                        onChange={(e) => setDesc(e.target.value)} 
                    />)
                    : (<p className="singlePostDesc"> { desc } </p>)
                }

               { updateMode 
                && (<button className="singlePostButton"onClick={ handleUpdate }>Atualizar</button>)
                }
            </div>
        </div>
    )
}