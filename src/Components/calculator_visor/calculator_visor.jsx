import React from 'react';
import './calculator_visor.css';

function CalcVisor(props){
        return(
            <div>
            <div className="visor">{props.TotalValue}</div>
            <div className="smallvisor">{props.Operation} {props.NextValue}</div>
            </div>
        );
}

export default CalcVisor;