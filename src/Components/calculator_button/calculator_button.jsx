import React from 'react';
import './calculator_button.css'

function CalcButton(props)
{

    function handleClick(){
        props.clickHandler(props.Name);
      };


    return(
        <button onClick={handleClick}>{props.Name}</button>
    );
}


export default CalcButton;



