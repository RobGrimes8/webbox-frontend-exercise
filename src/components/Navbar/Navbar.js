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
                    <a href="javascript:;">Home</a>
                    <a href="javascript:;">Links</a>
                    <a href="javascript:;">About</a>
                    <a href="javascript:;">Contact</a>
                    <button>CTA Button</button>
                </div> 
            </nav>
    );
}

export default Navbar;