import './post.css'

import { Link } from 'react-router-dom'

export default function Post ({ post}) {

    const PF="https://amadeitca9aconsumismo.herokuapp.com/images/";
 
    console.log(PF + post.photo)
    return (

        <div className="post">
            {
                post.photo && 
                    (<img 
                        className="postImg" 
                        src={ PF+post.photo }
                        alt="minha foto"
                    />)
                
            }

            <div className="postInfo">
                <div className="postCats">
                    
                    {
                        post.categories.map((c) => (
                            <span className="postCat">{ c.name }</span>
                        ))
                    }
                    
                </div>

                <Link to={`/post/${post._id}`} className="link">
                
                    <span className="postTitle">
                        { post.title }
                    </span>

                </Link>
                
                <hr />
                <span className="postDate">
                { new Date(post.createdAt).toDateString() }
                </span>
            </div>

            <p className="postDesc">


               { post.desc }
               
            </p>
        </div>
    )
}

