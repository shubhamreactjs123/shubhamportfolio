import React from "react";
import NavBar from "./components/navBar";

import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Home;
