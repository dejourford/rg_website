import "./navigation.css"
import { useState } from 'react';



export default function Navigation() {
    const [open, setOpen] = useState(false)
    
    const hideMenu = () => {
        setOpen(false)
    }

    const showMenu = () => {
        setOpen(true)
    }


    
    return (
        <header className="navigationSection">
            <nav className={open ? "mobile-nav-active" : "mobile-nav"}>
                <ul className="mobile-links">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
                <button className="fa-xmark" onClick={hideMenu}><i className="fa-solid fa-xmark"></i></button>
            </nav>

            <nav className="main-nav">
                <div className="nav-left">
                    <ul className="main-links">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                </div>

                <h1>RG Burgers & Grill</h1>

                <div className="nav-right">
                    <ul className="nav-socials">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <button className="order-btn">Place Order</button>
                    </ul>
                    <button className="fa-bars" onClick={showMenu}><i className="fa-solid fa-bars"></i></button>
                </div>
                
            </nav>
        </header>
        
        
    )
}