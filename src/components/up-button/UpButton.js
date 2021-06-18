import React, {useState} from 'react';

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
            <button onClick={scrollTop}>Top</button>
        </div>
    );
}


//
// const ScrollArrow = () =>{
//
//
//
//     return (
//         <FaArrowCircleUp className="scrollTop"  style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
//     );
// }