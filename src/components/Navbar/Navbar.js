//STYLES
import '../../styles/css/Navbar.css'
//IMAGES
import logo from '../../assets/images/logo.png'

function Navbar() {
    return (
            <nav className="nav">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="links">
                    <a>Home</a>
                    <a>Links</a>
                    <a>About</a>
                    <a>Contact</a>
                    <button>CTA Button</button>
                </div> 
            </nav>
    );
}

export default Navbar;