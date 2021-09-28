import { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import './singlepost.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Singlepost() {

    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})

    const PF="http://localhost:5000/images/"
 


    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`/posts/${path}`)

            setPost(response.data)
        } 

        getPost();
    }, [path])

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

                <h1 className="singlePostTitle">
                    { post.title }

                    <div className="singlePostEdit">
                        <i className=" singlePostIcon far fa-edit"></i>
                        <i className=" singlePostIcon far fa-trash-alt"></i>
                    </div>  
                </h1>

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

                <p className="singlePostDesc">
                    
                 { post.desc }

                </p>
            </div>
        </div>
    )
}