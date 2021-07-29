import React from 'react'
import leftArrow from '../icons/left-arrow.svg';
import rightArrow from '../icons/right-arrow.svg';

function ButtonSlider(props){
    return(
        <button className={props.direction === 'left' ? "btn-slide prev" : "btn-slide next"}
                onClick={props.moveSlide}>
            <img alt={props.direction} src={props.direction === 'left' ? leftArrow : rightArrow}/>
        </button>
    );
}

export default ButtonSlider;