import React from "react";
import Footer from "../footer/Footer";
import UpButton from "../up-button/UpButton";
import Header from "../header/header";


export default function MainLayout({children}){



    return (
        <div>
            <Header/>
            <div className="main-layout__wrapper">
              {children}
            </div>
            <UpButton/>
            <Footer/>
        </div>
    );
}