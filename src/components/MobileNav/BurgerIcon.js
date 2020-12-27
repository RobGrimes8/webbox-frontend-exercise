import '../../styles/css/Navbar.css'

function BurgerIcon(props) {
    return (
        <div className="iconContainer">
            <div className="styledBurger" onClick={props.setOpen}>
                <div style={{ transform: props.open ? 'rotate(45deg)' : 'rotate(0)', background: props.open ? "#B0B0B0" : "#C4D446" }} />
                <div style={{ opacity: props.open ? '0' : '1',  transform: props.open ? 'translateX(20px)' : 'translateX(0)'}} />
                <div style={{ transform: props.open ? 'rotate(-45deg)' : 'rotate(0)', background: props.open ? "#B0B0B0" : "#C4D446" }} />
            </div>
        </div>
    );
}

export default BurgerIcon;