import React from "react";

import Carousels from "./components/carousels/Carousels"
import NewsModule from "./components/news-module/NewsModule";
import InfoModule from "./components/info-module/infoModule";
import MainLayout from "../../components/main-layout/MainLayout";
import FederationsList from "./components/federations-module/FederationsList"

export default function MainPage() {
  return (
    <MainLayout>
      <div className="main-page__wrapper">
        <Carousels/>
        <NewsModule/>
        <InfoModule/>
        <FederationsList/>
      </div>
    </MainLayout>
  );
}