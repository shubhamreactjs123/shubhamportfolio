import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false)
    const handleNavigation = () => {
        setDisplay(!display)
    }
    useEffect(() => {
        setDisplay(false)
    }, [navigate])
    return (
        <div className="nav-bar">
            <div className="left-nav">
                <img style={{
                    height: "24px",
                    backdropFilter: "blur(5px)"
                }} src="shubham_icon.png" alt="shubham"/>
                HUBHAM
            </div>
            <div className="right-nav">
                <span onClick={() => navigate("/home")}>Home</span>
                <span>About</span>
                <span onClick={() => navigate("/experiments")}>Experiments</span>
                <span>Products</span>
                <span>Contact</span>
            </div>
            {/* Hamburger after */}
            <div onClick={handleNavigation} className="hamburger-container">
                <GiHamburgerMenu />
            </div>
            <div  className={display ? "navigation-dropup" :"navigation-dropdown"}>
                <span onClick={() => navigate("/home")}>Home</span>
                <span>About</span>
                <span onClick={() => navigate("/experiments")}>Experiments</span>
                <span>Products</span>
                <span>Contact</span>
            </div>
        </div>
    )

}
export default NavBar