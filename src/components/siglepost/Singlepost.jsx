import './singlepost.css'

export default function Singlepost() {
    return (
        <div className="singlepost">
            <div className="singlePostWraper">
                <img src="https://github.com/vanderllee.png" 
                    alt="Minha imagem" 
                    className="singlePostImg" 
                />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.

                    <div className="singlePostEdit">
                        <i className=" singlePostIcon far fa-edit"></i>
                        <i className=" singlePostIcon far fa-trash-alt"></i>
                    </div>  
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Vanderllee</b>
                    </span>

                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>

                <p className="singlePostDesc">
                    Lorem ipsum dolor sit
                     amet consectetur adipisicing elit. Nihil quod voluptatibus facilis assumenda quia quisquam voluptatem. Libero itaque perspiciatis
                     voluptate eos optio quia qui
                     dem voluptatibus, quas harum quis
                      dolorum laudantium?
                      Lorem ipsum dolor sit
                     amet consectetur adipisicing elit. Nihil quod voluptatibus facilis assumenda quia quisquam voluptatem. Libero itaque perspiciatis
                     voluptate eos optio quia qui
                     dem voluptatibus, quas harum quis
                      dolorum laudantium?
                      Lorem ipsum dolor sit
                     amet consectetur adipisicing elit. Nihil quod voluptatibus facilis assumenda quia quisquam voluptatem. Libero itaque perspiciatis
                     voluptate eos optio quia qui
                     dem voluptatibus, quas harum quis
                      dolorum laudantium?
                 
                </p>
            </div>
        </div>
    )
}