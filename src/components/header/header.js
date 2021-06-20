import React from "react";
import HeaderWhite from "./components/header-white/HeaderWhite";
import HeaderBlack from "./components/header-black/HeaderBlack";

export default function Header(){

  if (window.location.pathname === "/"){
    return (
      <HeaderBlack/>
    )
  } else {
    return (
      <HeaderWhite/>
    )
  }
}