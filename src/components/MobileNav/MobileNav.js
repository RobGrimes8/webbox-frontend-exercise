import { Component } from 'react'
//STYLES
import '../../styles/css/Navbar.css'
//COMPONENTS
import BurgerIcon from './BurgerIcon'
//IMAGES
import logo from '../../assets/images/logo.png'

class MobileNav extends Component {
    //Use state to open/close mobile nav
    constructor(props) {
        super(props);
        this.state = { 
            open: false
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.setState({open: !this.state.open})
    }

    render(){
        return (
            <>
                <BurgerIcon open={this.state.open} setOpen={this.handleMenuClick} />
                <nav className="mobileNav" style={{transform: this.state.open ? 'translateX(0)' : 'translateX(-100%)'}}>
                    <div className="navMenu">
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
                    </div>
                </nav>
            </>
        )
    }
}

export default MobileNav;