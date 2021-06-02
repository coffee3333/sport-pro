import React from "react";


export default function FederationsList(){
    const data = [
        {}
    ]


    axios.get('http://localhost:4000/books')
        .then(res => setBooks(res.data))
        .then()





    return (
        <div className="federations-list__main-box">
            <div className="federations-list__wrapper">

            </div>
        </div>
    );
}