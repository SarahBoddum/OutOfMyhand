import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/oomhlogo.png';
import { db } from '../Data/firebase';
import { collection, getDocs } from "firebase/firestore";

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const [krydsActive, setKrydsActive] = useState(false);
    const [menuItems, setMenuItems] = useState([]); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
        setKrydsActive(!krydsActive);
    }

    const closeAll = () => {
        setBurgerActive(false);
        setKrydsActive(false);
        setActiveDropdown(null); // Luk dropdowns
    };

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Arkiv"));  
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id, // fx "2023"
                    path: `/archive/${doc.id}` // Brug ID direkte i path
                }));
                setMenuItems(items);
            } catch (error) {
                console.error("❌ Fejl ved hentning af menu:", error);
            }
        };
    
        fetchMenuItems();
    }, []);    

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
            <NavLink className="navlink mobil" to="/"  onClick={toggleBurger}>
                <img src={logo} className="mobil" id="logo" alt="Logo" loading="lazy" />
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
                        <img src={logo} className="laptop" id="logo" alt="Logo" loading="lazy" />
                    </NavLink>
                    <NavLink className="navlink" to="/Shop" onClick={toggleBurger}>Shop</NavLink>
                    <div className="dropdown">
                        <NavLink className="navlink" to="/Archive" onClick={toggleBurger}>Archive</NavLink>
                        <div className="dropdown-content">
                            {menuItems.map(item => (
                                <NavLink key={item.id} className="navlink" to={item.path} onClick={closeAll}>
                                    {item.id}
                                </NavLink>
                            ))}
                        </div>

                    </div>

                    <NavLink className="navlink" to="/Custom" onClick={toggleBurger}>Customized</NavLink>
                </div>
            </div>
        </nav>   
    );
}
