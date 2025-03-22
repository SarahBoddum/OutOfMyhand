import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/oomhlogo.png';

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
    }

    const updateWindowSize = () => {
        setIsMobile(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        return () => window.removeEventListener("resize", updateWindowSize);
    }, []);

    useEffect(() => {
        if (isMobile && burgerActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [burgerActive, isMobile]); 

    return (
        <nav className="navigation" id="navbar">
            <NavLink className="navlink mobil" to="/">
                <img src={logo} id="logo" alt="Logo" loading="lazy" />
            </NavLink>

            {isMobile && (
                <div onClick={toggleBurger} id="burger-menu"     className={burgerActive ? "close" : ""}>
                    <span></span>
                </div>
            )}

            <div id="menu" className={burgerActive ? 'overlay' : null}> 
                <div id="xul">
                    <NavLink className="navlink" id="about" to="/About" onClick={toggleBurger}>About</NavLink>
                    <NavLink className="navlink laptop" to="/" onClick={toggleBurger}>
                        <img src={logo} id="logo" alt="Logo" loading="lazy" />
                    </NavLink>
                    <NavLink className="navlink" to="/Shop" onClick={toggleBurger}>Shop</NavLink>
                    <NavLink className="navlink" to="/Archive" onClick={toggleBurger}>Archive</NavLink>
                    <NavLink className="navlink" to="/Custom" onClick={toggleBurger}>Customized</NavLink>
                </div>
            </div>
        </nav>   
    );
}
