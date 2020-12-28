//STYLES
import '../../styles/css/Navbar.css'
//IMAGES
import logo from '../../assets/images/logo.png'

function Navbar() {
    return (
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="WebBox Logo" />
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">Links</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <button>CTA Button</button>
                </div> 
            </nav>
    );
}

export default Navbar;