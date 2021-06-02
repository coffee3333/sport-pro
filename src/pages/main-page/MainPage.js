import React from "react";

import Carousels from "./carousels/Carousels"
import NewsModule from "./news-module/NewsModule";
import InfoModule from "./info-module/infoModule";
import MainLayout from "../../components/main-layout/MainLayout";

export default function MainPage(){
    return(
            <MainLayout>
                <div className="main-page__wrapper">
                    <Carousels/>
                    <NewsModule/>
                    <InfoModule/>
                </div>
            </MainLayout>
    );
}