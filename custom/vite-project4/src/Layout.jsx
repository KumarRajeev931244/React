import React from "react";
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import { Outlet } from "react-router-dom";
 
export default function Layout(){
    return(
        <>
        <Header/>
        {/* outlet work dynamically. */}
        <Outlet/>
        <Footer/>
        </>
    )

}