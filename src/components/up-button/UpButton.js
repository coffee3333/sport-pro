import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import "./UpButton.css"


export default function UpButton(){

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="up-button__wrapper">
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
        </div>
    );
}