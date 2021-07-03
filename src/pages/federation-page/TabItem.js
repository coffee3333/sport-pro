import React from "react";


export default function TabItem(props){
  return (
    <button onClick={props.setTab}>{props.item}</button>
  );
}