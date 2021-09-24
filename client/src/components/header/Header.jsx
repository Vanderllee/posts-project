import './header.css'


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Consumismo</span>
                <span className="headerTitleLg">Blog</span>
            </div>

            <img 
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2016/09/19/02/17/world-1679462_960_720.png" 
                alt="foto do blog" 
            />
        </div>
    )
}