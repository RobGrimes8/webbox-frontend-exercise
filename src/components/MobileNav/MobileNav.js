import React, { Component } from 'react'

import '../../styles/css/Navbar.css'
import BurgerIcon from './BurgerIcon'
import logo from '../../assets/images/logo.png'

class MobileNav extends Component {

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
                            <img src={logo} />
                        </div>
                        <div className="links">
                            <a>Home</a>
                            <a>Links</a>
                            <a>About</a>
                            <a>Contact</a>
                            <button>CTA Button</button>
                        </div> 
                    </div>
                </nav>
            </>
        )
    }
}

export default MobileNav;