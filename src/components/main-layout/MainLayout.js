import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";



export default function MainLayout({children}){



    return (
        <div>
            <Header/>
            <div className="main-layout__wrapper">
                {children}
            </div>
            <Footer/>
        </div>
    );
}